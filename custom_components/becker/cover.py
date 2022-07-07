"""Support for Becker RF covers."""

import logging

import voluptuous as vol
from xknx.devices import TravelCalculator

from homeassistant.core import callback
from homeassistant.exceptions import (
    TemplateError,
)

import homeassistant.helpers.config_validation as cv
from homeassistant.helpers.restore_state import RestoreEntity
from homeassistant.helpers.event import (
    async_call_later,
    TrackTemplate,
    async_track_template_result,
)
from homeassistant.components.cover import (
    PLATFORM_SCHEMA,
    SUPPORT_CLOSE,
    SUPPORT_CLOSE_TILT,
    SUPPORT_OPEN,
    SUPPORT_OPEN_TILT,
    SUPPORT_STOP,
    ATTR_POSITION,
    ATTR_CURRENT_POSITION,
    SUPPORT_SET_POSITION,
    CoverEntity,
)
from homeassistant.const import (
    CONF_COVERS,
    CONF_DEVICE,
    CONF_FILENAME,
    CONF_FRIENDLY_NAME,
    CONF_VALUE_TEMPLATE,
    STATE_CLOSED,
    STATE_OPEN,
)
from .const import (
    DOMAIN,
    RECEIVE_MESSAGE,
    CONF_CHANNEL,
    DEVICE_CLASS,
    CLOSED_POSITION,
    OPEN_POSITION,
    VENTILATION_POSITION,
    INTERMEDIATE_POSITION,
    CONF_REMOTE_ID,
    CONF_TRAVELLING_TIME_DOWN,
    CONF_TRAVELLING_TIME_UP,
    CONF_INTERMEDIATE_POSITION_UP,
    CONF_INTERMEDIATE_POSITION_DOWN,
    CONF_INTERMEDIATE_DISABLE,
    COMMANDS,
    REMOTE_ID,
)

from .rf_device import PyBecker

_LOGGER = logging.getLogger(__name__)

COVER_FEATURES = SUPPORT_OPEN | SUPPORT_CLOSE | SUPPORT_STOP

_VALID_STATES = [
    STATE_OPEN,
    STATE_CLOSED,
    "true",
    "false",
    True,
    False
]


COVER_SCHEMA = vol.Schema(
    {
        vol.Optional(CONF_FRIENDLY_NAME): cv.string,
        vol.Required(CONF_CHANNEL): cv.string,
        vol.Optional(CONF_VALUE_TEMPLATE): cv.template,
        vol.Optional(CONF_REMOTE_ID): cv.string,
        vol.Optional(CONF_TRAVELLING_TIME_DOWN): cv.positive_float,
        vol.Optional(CONF_TRAVELLING_TIME_UP): cv.positive_float,
        vol.Optional(CONF_INTERMEDIATE_POSITION_UP, default=VENTILATION_POSITION): cv.positive_int,
        vol.Optional(CONF_INTERMEDIATE_POSITION_DOWN, default=INTERMEDIATE_POSITION): cv.positive_int,
        vol.Optional(CONF_INTERMEDIATE_DISABLE, default=False): cv.boolean,
    }
)

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend(
    {
        vol.Required(CONF_COVERS): cv.schema_with_slug_keys(COVER_SCHEMA),
        vol.Optional(CONF_DEVICE): cv.string,
        vol.Optional(CONF_FILENAME): cv.string,
    }
)


async def async_setup_platform(hass, config, async_add_entities, discovery_info=None):
    """Set up the becker platform."""
    covers = []
    device = config.get(CONF_DEVICE)
    filename = config.get(CONF_FILENAME)
    _LOGGER.debug("%s: %s; %s: %s", CONF_DEVICE, device, CONF_FILENAME, filename)
    PyBecker.setup(hass, device=device, filename=filename)

    for device, device_config in config[CONF_COVERS].items():
        friendly_name = device_config.get(CONF_FRIENDLY_NAME, device)
        channel = device_config.get(CONF_CHANNEL)
        state_template = device_config.get(CONF_VALUE_TEMPLATE)
        remote_id = device_config.get(CONF_REMOTE_ID)
        travel_time_down = device_config.get(CONF_TRAVELLING_TIME_DOWN)
        travel_time_up = device_config.get(CONF_TRAVELLING_TIME_UP)
        intermediate_pos_up = device_config.get(CONF_INTERMEDIATE_POSITION_UP)
        intermediate_pos_down = device_config.get(CONF_INTERMEDIATE_POSITION_DOWN)
        intermediate_disable = device_config.get(CONF_INTERMEDIATE_DISABLE)
        if channel is None:
            _LOGGER.error("Must specify %s", CONF_CHANNEL)
            continue
        # Initialize all missing units in the db file and send stop command for sync
        await PyBecker.becker.init_unconfigured_unit(channel, name=friendly_name)

        covers.append(
            BeckerEntity(
                PyBecker.becker, friendly_name, channel,
                state_template, remote_id, travel_time_down, travel_time_up,
                intermediate_pos_up, intermediate_pos_down, intermediate_disable,
            )
        )

    async_add_entities(covers)


class BeckerEntity(CoverEntity, RestoreEntity):
    """Representation of a Becker cover entity."""

    def __init__(
        self, becker, name, channel,
        state_template, remote_id, travel_time_down, travel_time_up,
        intermediate_pos_up, intermediate_pos_down, intermediate_disable,
    ):
        """Init the Becker device."""
        self._becker = becker
        self._name = name
        self._attr = dict()
        self._channel = channel
        self._attr[CONF_CHANNEL] = str(channel)
        self._cover_features = COVER_FEATURES
        # Template
        self._template = state_template
        # Intermediate position settings
        self._intermediate_pos_up = intermediate_pos_up
        self._intermediate_pos_down = intermediate_pos_down
        if not intermediate_disable:
            self._cover_features |= SUPPORT_OPEN_TILT | SUPPORT_CLOSE_TILT
        # Callbacks
        self._callbacks = dict()
       # Setup TravelCalculator
        if not ((travel_time_down or travel_time_up) is None or self._template is not None):
            self._cover_features |= SUPPORT_SET_POSITION
        # Warning if both template and travelling time are set
        if (travel_time_down or travel_time_up) is not None and self._template is not None:
            _LOGGER.warning('Both "%s" and "%s" are configured for cover %s. "%s" will disable "%s"!',
                CONF_VALUE_TEMPLATE, CONF_TRAVELLING_TIME_UP.rpartition("_")[0], self._name,
                CONF_VALUE_TEMPLATE, CONF_TRAVELLING_TIME_UP.rpartition("_")[0],
            )
        travel_time_down = travel_time_down or travel_time_up or 0
        travel_time_up = travel_time_up or travel_time_down or 0
        if self._cover_features & SUPPORT_SET_POSITION:
            self._attr[CONF_TRAVELLING_TIME_DOWN] = str(travel_time_down)
            self._attr[CONF_TRAVELLING_TIME_UP] = str(travel_time_up)
        self._tc = TravelCalculator(travel_time_down, travel_time_up)
        # Setup Remote IDs
        if remote_id is None:
            remote_id = ""
        self._remode_ids = set()
        for i in REMOTE_ID.finditer(remote_id):
            id1 = i['id'].upper() + i['ch'].upper() # Configured channel
            id2 = i['id'].upper() + 'F'             # ALL channels of Multi-Channel-Remote
            self._remode_ids.update([id1.encode(), id2.encode()])
        if len(self._remode_ids) > 0:
            self._attr[CONF_REMOTE_ID] = b", ".join(self._remode_ids).decode()

    async def async_added_to_hass(self):
        """Register callbacks."""
        # restore position
        old_state = await self.async_get_last_state()
        if old_state is not None:
            if ATTR_CURRENT_POSITION in old_state.attributes:
                pos = old_state.attributes[ATTR_CURRENT_POSITION]
                if pos is not None:
                    # In TravelCalculator 0 is open, 100 is closed.
                    self._tc.set_position(100 - pos)
        # set closed position as default if still unknown
        if self._tc.current_position() is None:
            self._tc.set_position(100 - CLOSED_POSITION)
        # Setup callback on received packets
        receive = self.hass.helpers.dispatcher.async_dispatcher_connect(
            f"{DOMAIN}.{RECEIVE_MESSAGE}", self._async_message_received
        )
        self.async_on_remove(receive)
        # Setup callback on template changes
        if self._template is not None:
            info = async_track_template_result(
                self.hass,
                [TrackTemplate(self._template, None)],
                self._async_on_template_update,
            )
            self.async_on_remove(info.async_remove)
            info.async_refresh()

    async def async_will_remove_from_hass(self):
        """Unsubscribe temporary callbacks."""
        for callback in self._callbacks:
            self._callbacks[callback]()

    @property
    def name(self):
        """Return the name of the device as reported by tellcore."""
        return self._name

    @property
    def unique_id(self):
        """Return the unique id of the device - the channel."""
        return self._channel

    @property
    def current_cover_position(self):
        """Return current position of cover. None is unknown, 0 is closed, 100 is fully open."""
        # In TravelCalculator 0 is open, 100 is closed.
        return 100 - self._tc.current_position()

    @property
    def device_class(self):
        """Return the class of this device, from component DEVICE_CLASSES."""
        return DEVICE_CLASS

    @property
    def supported_features(self):
        """Flag supported features."""
        return self._cover_features

    @property
    def is_closed(self):
        """Return true if cover is closed, else False."""
        return self._tc.is_closed()

    @property
    def is_opening(self):
        """Return if the cover is opening or not."""
        action = False
        if self._cover_features & SUPPORT_SET_POSITION:
            action = self._tc.is_opening()
        return action

    @property
    def is_closing(self):
        """Return if the cover is closing or not."""
        action = False
        if self._cover_features & SUPPORT_SET_POSITION:
            action = self._tc.is_closing()
        return action

    @property
    def extra_state_attributes(self):
        """Return the device state attributes."""
        self._attr[ATTR_POSITION] = self.current_cover_position
        return self._attr

    @property
    def should_poll(self):
        """Return if the cover should poll"""
        # by default this is set to True, therefore all cover entities
        # would be updated regulary. This disables the automatic update, but we
        # have to notify hass whenever something changes.
        return False

    async def async_open_cover(self, **kwargs):
        """Set the cover to the open position."""
        self._travel_to_position(OPEN_POSITION)
        await self._becker.move_up(self._channel)

    async def async_open_cover_tilt(self, **kwargs):
        """Open the cover tilt."""
        # Feature only available if SUPPORT_OPEN_TILT is set
        self._travel_up_intermediate()
        await self._becker.move_up_intermediate(self._channel)

    async def async_close_cover(self, **kwargs):
        """Set the cover to the closed position."""
        self._travel_to_position(CLOSED_POSITION)
        await self._becker.move_down(self._channel)

    async def async_close_cover_tilt(self, **kwargs):
        """Close the cover tilt."""
        # Feature only available if SUPPORT_CLOSE_TILT is set
        self._travel_down_intermediate()
        await self._becker.move_down_intermediate(self._channel)

    async def async_stop_cover(self, **kwargs):
        """Set the cover to the stopped position."""
        self._travel_stop()
        await self._becker.stop(self._channel)

    async def async_set_cover_position(self, **kwargs):
        """Move the cover to a specific position."""
        # Feature only available if SUPPORT_SET_POSITION is set
        if ATTR_POSITION in kwargs:
            pos = kwargs[ATTR_POSITION]
            travel_time = self._travel_to_position(pos)
            if self._tc.is_closing():
                await self._becker.move_down(self._channel)
            elif self._tc.is_opening():
                await self._becker.move_up(self._channel)
            if 0 < self._tc.travel_to_position < 100:
                self._update_scheduled_stop_travel_callback(travel_time)

    def _travel_to_position(self, position):
        """Start TravelCalculator and update ha-state."""
        # In TravelCalculator 0 is open, 100 is closed.
        travel_time = self._tc._calculate_travel_time(
            self.current_cover_position - position
        )
        if self._template is None:
            _LOGGER.debug(
                "%s is travelling from position %s to %s in %s seconds",
                self.name, self.current_cover_position, position, travel_time,
            )
            self._tc.start_travel(100 - position)
            self._update_scheduled_ha_state_callback(travel_time)
        return travel_time

    def _travel_stop(self):
        """Stop TravelCalculator and update ha-state."""
        self._tc.stop()
        if not (self._cover_features & SUPPORT_SET_POSITION) and self._template is None:
            self._tc.set_position(50)
        _LOGGER.debug("%s stopped at position %s", self.name, self.current_cover_position)
        self._update_scheduled_ha_state_callback(0)

    def _travel_up_intermediate(self):
        pos = self.current_cover_position
        if ((pos > self._intermediate_pos_up) or
            not (self._cover_features & SUPPORT_OPEN_TILT)):
            self._travel_to_position(OPEN_POSITION)
        else:
            self._travel_to_position(self._intermediate_pos_up)

    def _travel_down_intermediate(self):
        pos = self.current_cover_position
        if ((pos < self._intermediate_pos_down) or
            not (self._cover_features & SUPPORT_CLOSE_TILT)):
            self._travel_to_position(CLOSED_POSITION)
        else:
            self._travel_to_position(self._intermediate_pos_down)

    def _update_scheduled_ha_state_callback(self, delay=None):
        """
        Update ha-state callback
        None: unsubscibe pending callback
        0:    update now
        > 0:  update now and setup callback after delay later
        """
        # unsubscribe outdated pending callbacks
        self._callbacks.pop('update_ha', lambda: None)()
        # Schedule callback to update ha-state at end of travel
        if delay is not None:
            # Update ha-state immediately
            _LOGGER.debug("%s update ha-state now", self._name)
            self.async_schedule_update_ha_state()
            # Schedule update ha-state later
            if delay > 0:
                _LOGGER.debug(
                    "%s setup update ha-state callback in %s seconds",
                    self.name, delay,
                )
                self._callbacks['update_ha'] = async_call_later(
                    self.hass, delay, self._async_update_ha_state
                )

    def _update_scheduled_stop_travel_callback(self, delay=None):
        """
        Update ha-state callback
        None: unsubscibe pending callback
        >= 0: setup callback stop after delay later
        """
        # unsubscribe outdated pending callbacks
        self._callbacks.pop('travel_stop', lambda: None)()
        # schedule callback to stop travelling at end of travel
        if delay is not None:
            # Stop now or later
            if delay >= 0:
                _LOGGER.debug(
                    "%s setup stop travel callback in %s seconds",
                    self.name, delay,
                )
                self._callbacks['travel_stop'] = async_call_later(
                    self.hass, delay, self._async_stop_travel
                )

    @callback
    async def _async_message_received(self, packet):
        """Handle received packets."""
        ids = packet.group('unit_id') + packet.group('channel')
        if ids in self._remode_ids:
            _LOGGER.debug("%s received a packet from dispatcher", self._name)
            command = packet.group('command') + b'0'
            cmd_arg = command + packet.group('argument')
            if command == COMMANDS['halt']:
                self._travel_stop()
            elif ((cmd_arg == COMMANDS['up_intermediate']) and
                  (self._cover_features & SUPPORT_OPEN_TILT)):
                self._travel_up_intermediate(self)
            elif command == COMMANDS['up']:
                self._travel_to_position(OPEN_POSITION)
            elif ((cmd_arg == COMMANDS['down_intermediate']) and
                  (self._cover_features & SUPPORT_CLOSE_TILT)):
                self._travel_down_intermediate(self)
            elif command == COMMANDS['down']:
                self._travel_to_position(CLOSED_POSITION)

    @callback
    async def _async_stop_travel(self, _):
        """Stop the cover callack."""
        self._update_scheduled_stop_travel_callback()
        await self._becker.stop(self._channel)

    @callback
    async def _async_update_ha_state(self, _):
        """Update HA-State while travelling."""
        self._update_scheduled_ha_state_callback(0)

    @callback
    async def _async_on_template_update(self, _, updates):
        """Update position on template update"""
        result = updates.pop().result
        self._attr[CONF_VALUE_TEMPLATE] = result
        if isinstance(result, TemplateError):
            _LOGGER.error('%s: Update template with error', self._name)
        else:
            _LOGGER.debug(
                '%s: Update template with result: %s with type %s',
                self._name, result, type(result)
            )
            if result in _VALID_STATES:
                if result in (True, "true", STATE_OPEN):
                    pos = OPEN_POSITION
                else:
                    pos = CLOSED_POSITION
            elif isinstance(result, int) or isinstance(result, float):
                # Clip position to a range of 0 - 100
                pos = round(max(min(result, OPEN_POSITION), CLOSED_POSITION))
            else:
                _LOGGER.error('%s: invalid template result: %s',
                    self._name, result
                )
                pos = self.current_cover_position
            # In TravelCalculator 0 is open, 100 is closed.
            self._tc.set_position(100 - pos)
            self._attr[CONF_VALUE_TEMPLATE] = result
            self.async_schedule_update_ha_state()
