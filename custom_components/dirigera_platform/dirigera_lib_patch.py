from __future__ import annotations
from typing import Any, Dict, List, Optional

from dirigera import Hub

from dirigera.devices.device import Attributes, Device
from dirigera.hub.abstract_smart_home_hub import AbstractSmartHomeHub
from dirigera.devices.scene import Info, Icon,  SceneType, Trigger, TriggerDetails, ControllerType
import logging

logger = logging.getLogger("custom_components.dirigera_platform")


class HubX(Hub):
    def __init__(
        self, token: str, ip_address: str, port: str = "8443", api_version: str = "v1"
    ) -> None:
        super().__init__(token, ip_address, port, api_version)

    def get_controllers(self) -> List[ControllerX]:
        """
        Fetches all controllers registered in the Hub
        """
        devices = self.get("/devices")
        controllers = list(filter(lambda x: x["type"] == "controller", devices))
        return [dict_to_controller(controller, self) for controller in controllers]
    
    # Scenes are a problem so making a hack
    def get_scenes(self):
        """
        Fetches all controllers registered in the Hub
        """
        scenes = self.get("/scenes")
        #scenes = list(filter(lambda x: x["type"] == "scene", devices))
        
        return [HackScene.make_scene(self, scene) for scene in scenes]
    
    def get_scene_by_id(self, scene_id: str):
        """
        Fetches a specific scene by a given id
        """
        data = self.get(f"/scenes/{scene_id}")
        return HackScene.make_scene(self, data)
    
    def create_empty_scene(self, controller_id: str, clicks_supported:list):
        logging.debug(f"Creating empty scene for controller : {controller_id} with clicks : {clicks_supported}")
        for click in clicks_supported:
            scene_name = f'dirigera_integration_empty_scene_{controller_id}_{click}'
            info = Info(name=f'dirigera_integration_empty_scene_{controller_id}_{click}', icon=Icon.SCENES_CAKE)
            device_trigger = Trigger(type="controller", disabled=False,
                                     trigger=TriggerDetails(clickPattern=click, buttonIndex=0, deviceId=controller_id, controllerType=ControllerType.SHORTCUT_CONTROLLER))

            logger.debug(f"Creating empty scene : {info.name}")
            #self.create_scene(info=info, scene_type=SceneType.USER_SCENE,triggers=[device_trigger])
            data = {
                        "info": {"name" : scene_name, "icon" : "scenes_cake"},
                        "type": "customScene",
                        "triggers":[
                                        {
                                            "type": "controller", 
                                            "disabled": False, 
                                            "trigger": 
                                                {
                                                    "controllerType": "shortcutController",
                                                    "clickPattern": click,
                                                    "buttonIndex": 0,
                                                    "deviceId": controller_id
                                                }
                                        }
                                    ],
                "actions": []
            }
            
            self.post("/scenes/", data=data)
        
    def delete_empty_scenes(self):
        scenes = self.get_scenes()
        for scene in scenes:
            if scene.name.startswith("dirigera_integration_empty_scene_"):
                logging.debug(f"Deleting Scene id: {scene.id} name: {scene.name}...")
                self.delete_scene(scene.id)

    def get_motion_sensors(self) -> List[MotionSensorX]:
        """
        Fetches all motion sensors registered in the Hub.
        Includes both motionSensor and occupancySensor device types.
        IKEA MYGGSPRAY sensors report as occupancySensor instead of motionSensor.
        """
        devices = self.get("/devices")
        sensors = list(filter(lambda x: x["deviceType"] in ("motionSensor", "occupancySensor"), devices))
        return [dict_to_motion_sensor_x(sensor, self) for sensor in sensors]

    def get_motion_sensor_by_id(self, id_: str) -> MotionSensorX:
        """
        Fetches a motion sensor by ID.
        Accepts both motionSensor and occupancySensor device types.
        """
        motion_sensor = self._get_device_data_by_id(id_)
        if motion_sensor["deviceType"] not in ("motionSensor", "occupancySensor"):
            raise ValueError("Device is not a MotionSensor or OccupancySensor")
        return dict_to_motion_sensor_x(motion_sensor, self)


class ControllerAttributesX(Attributes):
    is_on: Optional[bool] = None
    battery_percentage: Optional[int] = None
    switch_label: Optional[str] = None

class ControllerX(Device):
    dirigera_client: AbstractSmartHomeHub
    attributes: ControllerAttributesX

    def reload(self) -> ControllerX:
        data = self.dirigera_client.get(route=f"/devices/{self.id}")
        return ControllerX(dirigeraClient=self.dirigera_client, **data)

    def set_name(self, name: str) -> None:
        if "customName" not in self.capabilities.can_receive:
            raise AssertionError(
                "This controller does not support the set_name function"
            )

        data = [{"attributes": {"customName": name}}]
        self.dirigera_client.patch(route=f"/devices/{self.id}", data=data)
        self.attributes.custom_name = name

def dict_to_controller(
    data: Dict[str, Any], dirigera_client: AbstractSmartHomeHub
) -> ControllerX:
    return ControllerX(dirigeraClient=dirigera_client, **data)

class HackScene():

    def __init__(self, hub, id, name, icon):
        self.hub = hub
        self.id = id 
        self.name = name 
        self.icon = icon

    def parse_scene_json(json_data):
        id = json_data["id"]
        name = json_data["info"]["name"]
        icon = json_data["info"]["icon"]
        return id, name, icon 
    
    def make_scene(dirigera_client, json_data):
        id, name, icon = HackScene.parse_scene_json(json_data)
        return HackScene(dirigera_client, id, name, icon)
    
    def reload(self) -> HackScene:
        data = self.dirigera_client.get(route=f"/scenes/{self.id}")
        return HackScene.make_scene(self, data)
        #return Scene(dirigeraClient=self.dirigera_client, **data)

    def trigger(self) -> HackScene:
        self.hub.post(route=f"/scenes/{self.id}/trigger")

    def undo(self) -> HackScene:
        self.hub.post(route=f"/scenes/{self.id}/undo")


# Motion sensor patch for MYGGSPRAY (occupancySensor)
# MYGGSPRAY sensors don't have is_on attribute, so we make it optional
class MotionSensorAttributesX(Attributes):
    battery_percentage: Optional[int] = None
    is_on: Optional[bool] = None  # Made optional for MYGGSPRAY compatibility
    light_level: Optional[float] = None
    is_detected: Optional[bool] = False


class MotionSensorX(Device):
    dirigera_client: AbstractSmartHomeHub
    attributes: MotionSensorAttributesX

    def reload(self) -> "MotionSensorX":
        data = self.dirigera_client.get(route=f"/devices/{self.id}")
        return MotionSensorX(dirigeraClient=self.dirigera_client, **data)

    def set_name(self, name: str) -> None:
        if "customName" not in self.capabilities.can_receive:
            raise AssertionError("This sensor does not support the set_name function")
        data = [{"attributes": {"customName": name}}]
        self.dirigera_client.patch(route=f"/devices/{self.id}", data=data)
        self.attributes.custom_name = name


def dict_to_motion_sensor_x(
    data: Dict[str, Any], dirigera_client: AbstractSmartHomeHub
) -> MotionSensorX:
    return MotionSensorX(dirigeraClient=dirigera_client, **data)