/*
This is an example configuration file.

COPY OR RENAME THIS FILE TO config.js.

Make sure you use real IDs from your HA entities.
*/


var CONFIG = {
	
	customTheme: null, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
	transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED_GPU, ANIMATED or SIMPLE (better perfomance)
	entitySize: ENTITY_SIZES.NORMAL, //SMALL, NORMAL, BIG are available
	tileSize: 150,
	tileMargin: 6,
	serverUrl: "http://" + location.hostname + ":8123",
	wsUrl: "ws://" + location.hostname + ":8123/api/websocket",
	authToken: null, // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
	//googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
	//mapboxToken: "XXXXXXXXXX", // Required if you are using Mapbox for device tracker
	debug: false, // Prints entities and state change info to the console.
	pingConnection: true, //ping connection to prevent silent disconnections

	// next fields are optional
	events: [],
	timeFormat: 24,
	menuPosition: MENU_POSITIONS.LEFT, // LEFT or BOTTOM
	hideScrollbar: false, // horizontal scrollbar
	groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY

	header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
		styles: {
			padding: '5px 40px 0',
			fontSize: '22px'
		},
		right: [],
		left: [
			{
				type: HEADER_ITEMS.DATETIME,
				dateFormat: 'EEEE, dd. LLLL yyyy', //https://docs.angularjs.org/api/ng/filter/date
			}
		]
	},

	/*screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
	timeout: 300, // after 5 mins of inactive
	slidesTimeout: 10, // 10s for one slide
	styles: { fontSize: '40px' },
	leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
	slides: [
	{ bg: 'images/bg1.jpeg' },
	{
	bg: 'images/bg2.png',
	rightTop: [ // put text to the 2nd slide
	{
	type: SCREENSAVER_ITEMS.CUSTOM_HTML,
	html: 'Welcome to the <b>TileBoard</b>',
	styles: { fontSize: '40px' }
	}
	]
	},
	{ bg: 'images/bg3.jpg' }
	]
	},*/

	pages: [
		{
			//title: 'Main page',
			bg: 'images/bg1.jpeg',
			icon: 'mdi-home-outline', // home icon
			styles: {
				padding: '75px 0px'
			},
			groups: [
				{
					title: '',
					width: 1,
					height: 3,
					items: [
						{
							position: [0, 0],
							height: 2,
							//classes: ['-compact'],
							type: TYPES.WEATHER,
							id: {},
							state: 
								function () {
									var map = [];
									map ["clear-night"] = "klar";
									map ["cloudy"] = "wolkig";
									map ["fog"] = "Nebel";
									map ["hail"] = "Hagel";
									map ["lightning"] = "Blitzschlag";
									map ["lightning-rainy"] = "Gewitter";
									map ["partlycloudy"] = "teilweise bewölkt";
									map ["pouring"] = "Wolkenbruch";
									map ["rainy"] = "Regen";
									map ["snowy"] = "Schneefall";
									map ["snowy-rainy"] = "Schneeregen";
									map ["sunny"] = "sonnig";
									map ["windy"] = "windig";
									map ["windy-variant"] = "stürmisch";
									var state = this.states ['weather.openweathermap'].state;
									return map [state] || state;
								},
							icon: '&weather.openweathermap.state',
							icons: {
								'clear-day': 'clear',
								//'clear-night': 'nt-clear',
								//'cloudy': 'cloudy',
								'rain': 'rain',
								'sleet': 'sleet',
								'snow': 'snow',
								'wind': 'hazy',
								//'fog': 'fog',
								'partly-cloudy-day': 'partlycloudy',
								'partly-cloudy-night': 'nt-partlycloudy',
								
								// from home-assistant https://www.home-assistant.io/components/weather/
								'clear-night': 'nt-clear',
								'cloudy': 'cloudy',
								'fog': 'fog',
								'hail': 'chanceflurries',
								'lightning': 'chancetstorms',
								'lightning-rainy': 'chancerain',
								'partlycloudy': 'partlycloudy',
								'pouring': 'rain',
								'rainy': 'sleet',
								'snowy': 'snow',
								'snowy-rainy': 'sleet',
								'sunny': 'clear',
								'windy': 'hazy',
								'windy-variant': 'flurries',
							},
							fields: {
								summary: '&sensor.owm_condition.state',
								temperature: '&sensor.owm_temperature.state',
								temperatureUnit: '&sensor.owm_temperature.attributes.unit_of_measurement',
								humidity: '&sensor.owm_humidity.state',
								humidityUnit: '&sensor.owm_humidity.attributes.unit_of_measurement',
								windSpeed: '&sensor.owm_wind_speed.state',
								windSpeedUnit: 'kmh',								
								list: [
									'Luftdruck '
									+ '&sensor.owm_pressure.state'
									+ '&sensor.owm_pressure.attributes.unit_of_measurement',
									'condition '
									+ '&sensor.owm_condition.state',
									'code '
									+ '&sensor.owm_weather_code.state',
								]
							}
						},
						{
							position: [1, 0],
							title: 'Innenlichter',
							id: 'light.automatic_indoor_lights',
							type: TYPES.LIGHT,
							states: {
								on: "On",
								off: "Off"
							},					  
							icons: {
								on: "mdi-lightbulb-on",
								off: "mdi-lightbulb"
							}
						},
						{
							position: [2, 0],
							type: TYPES.SENSOR,
							title: 'Außentemperatur',
							id: 'sensor.dht22_terrace_temperature',
							unit: '°C',
							state: false
						},
						{
							position: [3, 0],
							type: TYPES.COVER,
							title: 'Garagentor',
							id: 'cover.relay_garage',
							states: {
								open: 'Open',
								closed: 'Closed'
							}
						},
						{
							classes: ['sbahn-traffic'],
							position: [1, 1],
							width: 3,
							height: 1,
							title: 'S-Bahn',
							id: {}, // since we are binding each list item to different sensor, so we simply use an empty object
							type: TYPES.TEXT_LIST,
							state: false,
							list: [
								{ value: ' ' },
								{ value: '&sensor.traffic_sbahn_1.state' },
								{ value: ' ' },
								{ value: '&sensor.traffic_sbahn_2.state' }
							]
						}				  
					]
				}
			]
		},
		{
			//title: 'Second page',
			bg: 'images/bg2.png',
			icon: 'mdi-lightbulb',
			styles: {
				padding: '75px 0px'
			},
			groups: [
				{
					title: '',
					width: 2,
					height: 3,
					items: [
						{
							position: [0, 0],
							title: 'Innenlichter',
							id: 'light.automatic_indoor_lights',
							type: TYPES.LIGHT,
							states: {
								on: "On",
								off: "Off"
							},					  
							icons: {
								on: "mdi-lightbulb-on",
								off: "mdi-lightbulb"
							}
						},
						{
							position: [0, 1],
							title: 'Außenlichter',
							id: 'light.automatic_outdoor_lights',
							type: TYPES.LIGHT,
							states: {
								on: "On",
								off: "Off"
							},					  
							icons: {
								on: "mdi-lightbulb-on",
								off: "mdi-lightbulb"
							}
						},
					]
				},
			]
		}
	],
}
