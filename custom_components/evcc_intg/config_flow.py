import logging

import voluptuous as vol

from custom_components.evcc_intg.pyevcc_ha import EvccApiBridge
from custom_components.evcc_intg.pyevcc_ha.keys import Tag
from homeassistant import config_entries
from homeassistant.const import CONF_HOST, CONF_SCAN_INTERVAL, ATTR_SW_VERSION, CONF_NAME
from homeassistant.core import callback
from homeassistant.helpers.aiohttp_client import async_create_clientsession
from .const import (
    DOMAIN,
    CONF_INCLUDE_EVCC,
    CONF_USE_WS
)

_LOGGER: logging.Logger = logging.getLogger(__package__)


class EvccFlowHandler(config_entries.ConfigFlow, domain=DOMAIN):
    """Config flow for evcc_intg."""

    VERSION = 1
    CONNECTION_CLASS = config_entries.CONN_CLASS_LOCAL_POLL

    def __init__(self):
        """Initialize."""
        self._errors = {}
        self._version = ""

    async def async_step_user(self, user_input=None):
        """Handle a flow initialized by the user."""
        self._errors = {}

        if user_input is not None:
            if not user_input[CONF_HOST].startswith(("http://", "https://")):
                if ":" in user_input[CONF_HOST]:
                    # we have NO schema but a colon, so assume http
                    user_input[CONF_HOST] = "http://" + user_input[CONF_HOST]
                else:
                    # https otherwise
                    user_input[CONF_HOST] = "https://" + user_input[CONF_HOST]

            while user_input[CONF_HOST].endswith(("/", " ")):
                user_input[CONF_HOST] = user_input[CONF_HOST][:-1]

            valid = await self._test_host(host=user_input[CONF_HOST])
            if valid:
                user_input[ATTR_SW_VERSION] = self._version
                user_input[CONF_SCAN_INTERVAL] = max(5, user_input[CONF_SCAN_INTERVAL])
                return self.async_create_entry(title=user_input[CONF_NAME], data=user_input)
            else:
                self._errors[CONF_HOST] = "auth"
        else:
            user_input = {}
            user_input[CONF_NAME] = "evcc"
            user_input[CONF_HOST] = "http://your-evcc-ip:7070"
            user_input[CONF_SCAN_INTERVAL] = 15
            user_input[CONF_USE_WS] = True
            user_input[CONF_INCLUDE_EVCC] = False

        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema({
                vol.Required(CONF_NAME, default=user_input.get(CONF_NAME)): str,
                vol.Required(CONF_HOST, default=user_input.get(CONF_HOST)): str,
                vol.Required(CONF_USE_WS, default=user_input.get(CONF_USE_WS)): bool,
                vol.Required(CONF_SCAN_INTERVAL, default=user_input.get(CONF_SCAN_INTERVAL)): int,
                vol.Required(CONF_INCLUDE_EVCC, default=user_input.get(CONF_INCLUDE_EVCC)): bool,
            }),
            last_step=True,
            errors=self._errors
        )

    async def _test_host(self, host):
        try:
            session = async_create_clientsession(self.hass)
            client = EvccApiBridge(host=host, web_session=session, coordinator=None, lang=self.hass.config.language.lower())

            ret = await client.read_all_data()
            if ret is not None and len(ret) > 0:
                if Tag.VERSION.key in ret:
                    self._version = ret[Tag.VERSION.key]
                elif Tag.AVAILABLEVERSION.key in ret:
                    self._version = ret[Tag.AVAILABLEVERSION.key]
                else:
                    _LOGGER.warning("No Version could be detected - ignore for now")

                _LOGGER.info(f"successfully validated host -> result: {ret}")
                return True

        except Exception as exc:
            _LOGGER.error(f"Exception while test credentials: {exc}")
        return False

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        return EvccOptionsFlowHandler(config_entry)

class EvccOptionsFlowHandler(config_entries.OptionsFlow):
    def __init__(self, config_entry):
        """Initialize HACS options flow."""
        self._title = config_entry.title
        if len(dict(config_entry.options)) == 0:
            self.options = dict(config_entry.data)
        else:
            self.options = dict(config_entry.options)

        # implement fallback...
        if CONF_USE_WS not in self.options:
            self.options[CONF_USE_WS] = True

    async def async_step_init(self, user_input=None):  # pylint: disable=unused-argument
        """Manage the options."""
        return await self.async_step_user()

    async def async_step_user(self, user_input=None):
        """Handle a flow initialized by the user."""
        self._errors = {}
        if user_input is not None:
            # check if host has changed...
            if user_input[CONF_HOST] != self.options.get(CONF_HOST):
                if not user_input[CONF_HOST].startswith(("http://", "https://")):
                    if ":" in user_input[CONF_HOST]:
                        # we have NO schema but a colon, so assume http
                        user_input[CONF_HOST] = "http://" + user_input[CONF_HOST]
                    else:
                        # https otherwise
                        user_input[CONF_HOST] = "https://" + user_input[CONF_HOST]

                while user_input[CONF_HOST].endswith(("/", " ")):
                    user_input[CONF_HOST] = user_input[CONF_HOST][:-1]

                valid = await self._test_host(host=user_input[CONF_HOST])
            else:
                # remove host from the user_input (since it did not change)
                user_input.pop(CONF_HOST)
                valid = True

            if valid:
                user_input[CONF_SCAN_INTERVAL] = max(5, user_input[CONF_SCAN_INTERVAL])

                self.options.update(user_input)
                return await self._update_options()
            else:
                self._errors[CONF_HOST] = "auth"
        else:
            user_input = {}
            user_input[CONF_HOST] = self.options.get(CONF_HOST, "http://your-evcc-ip:7070")
            user_input[CONF_SCAN_INTERVAL] = self.options.get(CONF_SCAN_INTERVAL, 15)
            user_input[CONF_USE_WS] = self.options.get(CONF_USE_WS, True)
            user_input[CONF_INCLUDE_EVCC] = self.options.get(CONF_INCLUDE_EVCC, False)

        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema({
                vol.Required(CONF_HOST, default=user_input.get(CONF_HOST)): str,
                vol.Required(CONF_USE_WS, default=user_input.get(CONF_USE_WS)): bool,
                vol.Required(CONF_SCAN_INTERVAL, default=user_input.get(CONF_SCAN_INTERVAL)): int,
                vol.Required(CONF_INCLUDE_EVCC, default=user_input.get(CONF_INCLUDE_EVCC)): bool,
            }),
            errors=self._errors
        )

    async def _test_host(self, host):
        try:
            session = async_create_clientsession(self.hass)
            client = EvccApiBridge(host=host, web_session=session, coordinator=None, lang=self.hass.config.language.lower())

            ret = await client.read_all_data()
            if ret is not None and len(ret) > 0:
                _LOGGER.info(f"successfully validated host -> result: {ret}")
                return True

        except Exception as exc:
            _LOGGER.error(f"Exception while test credentials: {exc}")
        return False

    async def _update_options(self):
        return self.async_create_entry(title=self._title, data=self.options)
