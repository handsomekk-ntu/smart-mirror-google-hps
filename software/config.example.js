/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8081,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
					}
				]
			}
		},
		/*{
			module: "compliments",
			position: "lower_third"
		},*/
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
    /*{
      module: "MMM-GoogleAssistant",
      configDeepMerge: true,
      config: {
        debug: false,
        stopCommand: "stop",
        assistantConfig: {
          lang: "en-US",
          latitude: 25.04776,
          longitude: 121.53185,
          deviceRegistred: false
          },
        responseConfig: {
          useFullscreen: false,
          responseOutputCSS: "response_output.css",
          screenOutputTimer: 5000,
          useChime: true,
          confirmationChime: true,
          chimes: {
            beep: "beep.mp3",
            error: "error.mp3",
            continue: "continue.mp3",
            confirmation: "confirmation.mp3",
            open: "Google_beep_open.mp3",
            close: "Google_beep_close.mp3",
            warning: "warning.ogg"
          },
          imgStatus: {
            hook: "hook.gif",
            standby: "standby.gif",
            reply: "reply.gif",
            error: "error.gif",
            think: "think.gif",
            continue: "continue.gif",
            listen: "listen.gif",
            confirmation: "confirmation.gif",
            information: "information.gif",
            warning: "warning.gif",
            userError: "userError.gif"
          },
          zoom: {
            transcription: "80%",
            responseOutput: "60%"
          }
        },
        recipes: []
      }
    },*/
    {
      module: "Gateway",
      config: {
        debug: false,
        username: "YOUR_USERNAME",
        password: "YOUR_PASSWORD",
        CLIENT_ID: null
      }
    },
    /*{
      module: 'MMM-SmartTouch', 
      position: 'bottom_center',    // This can be any of the regions.(bottom-center Recommended)
      config:{ 
        // None configuration options defined 
      }
    },*/
    /*{
      module: "MMM-EasyPix",
    	position: "top_center",
    	config: {
    		picName: "15.jpg", // Enter the picture file name.
    		maxWidth: "75%",        // Size picture precisely. Retains aspect ratio.
    		sounds: ["1.mp3", "me2.mp3"],  // mp3 sound file names in quotes seperated by commas for Hello-Lucy
    		updateInterval: 30 * 60 * 1000,     // updates display
    	        animationSpeed: 3000,
  	  }
    },*/
    {
      module: "EXT-Detector",
      position: "top_left",
      config: {
        debug: false,
        useIcon: true,
        touchOnly: false,
        porcupineAccessKey: null,
        porcupineCustomModel: null,
        detectors: [
          {
            detector: "Snowboy",
            Model: "jarvis",
            Sensitivity: null
          },
          {
            detector: "Porcupine",
            Model: "ok google",
            Sensitivity: null
          },
          {
            detector: "Porcupine",
            Model: "hey google",
            Sensitivity: null
          }
        ]
      }
    },
    /*{
      module: 'EXT-Volume',
      config: {
        debug: false,
        startSpeakerVolume: 100,
        startRecorderVolume: 50,
        syncVolume: false
      }
    },*/
    {
      module: 'TakePicture-QRcode',
      position: "middle_right",
      /*config:{
        fileUrl:"/home/kkchanghps2023/MagicMirror/modules/TakePicture-QRcode/img/"
      }*/
    },
    /*{
      module: 'MMM-Button',
    },*/
    /*{
      module: "MMM-Modulebar",
      position: "bottom_bar", // This can be any of the regions.
      header: "Modules", // Optional
      classes: "default everyone", // Optional
      config: {
          // See 'Configuration options' for more information.
        buttons: {
          // A number (unique for each button) lowest number will be displayed first...
          "1": {
            // This button hides everything and uses two symbols.
            module: "all",
            symbol: "toggle-on",
            symbol2: "toggle-off",
          },
          "2": {
            // This is a button with text that changes and a symbol that changes.
            // The EXACT module name (case sensitive)
            module: "currentweather",
            text: "Current Weather on",
            text2: "Current Weather off",
            symbol: "fas fa-sun",
            symbol2: "far fa-sun",
          },
          "4": {
            // A button with only a symbol and an idnum to target a specific weatherforecast module.
            module: "weatherforecast",
            symbol: "sun-o",
            // The ID-number of the "weatherforecast" module (when you have more then one).
            idnum: 8,
          },
          "6": {
            // A button with only a symbol and an idnum to target another specific weatherforecast module.
            module: "weatherforecast",
            symbol: "star-o",
            // The ID-number of the other "weatherforecast" module (when you have more then one).
            idnum: 6,
          },
          "8": {
            // A button with text and a changing symbol.
            module: "clock",
            text: "Clock",
            symbol: "bell",
            symbol2: "bell-slash",
          },
          "10": {
            // A button to show and hide for example a [MMM-MotionEye](https://github.com/CatoAntonsen/MMM-MotionEye) module.
            module: "MMM-MotionEye",
            idnum: 7,
            text: "CAM1",
            showUrl: "http://MagicMirrorIP:8080/motioneye/1",
            hideUrl: "http://MagicMirrorIP:8080/motioneye/hide/1"
          },
        }
      }
    },*/
    
    /*{
      module: "MMM-iFrame",
      position: "top_left",
      config: {
              url: ["http://127.0.0.1:8888/?action=stream"],
              updateInterval: 0.5*60*1000,
              width: "352",
              height: "288",
              frameWidth: "352",
      },
    },*/
    /*{
    module: "MMM-RTSPStream",
    position: "middle_center",
    header: "kk",
        config: {
        autoStart: true,
        rotateStreams: true,
        rotateStreamTimeout: 10,
        moduleWidth: 354,
        moduleHeight: 240,
        localPlayer: 'vlc',
        remotePlayer: 'none',
        showSnapWhenPaused: true,
        remoteSnaps: true,
        shutdownDelay: 12,
        stream1: {
            name: 'Camera1',
            url: 'rtsp://172.20.10.2:8000/',
            frameRate: 'undefined',
            hdUrl: 'rtsp://172.20.10.2:8000/',
            snapshotUrl: '"/home/kkchanghps2023/MagicMirror/modules/MMM-RTSPStream/snapshot.jpg"',
            snapshotType: 'url',
            snapshotRefresh: 10,
            width: undefined,
            height: undefined,
            muted: true,
            },
        }
    },*/
    /*{
      disabled: false,
      module: "MMM-Selfieshot",
      position: "bottom_left",
      config: {
        displayButton: "portrait"
      }
    },*/
    /*{
    	module: "ledbtn",
      position: "bottom_bar"
    },*/
    /*{
    	module: 'MMM-Selfie',
    	config:
    	{
    	    useUSBCam: false,
    	    maxResX: 2592,
    	    maxResY: 1944,
    	    cameraRotation: 0,
    	    Facebook_pageid: '',
    	    Facebook_token: '',
    	    Facebook_ProfileId: '',
    	    twitter_access_key: '',
    	    twitter_access_secret: '',
    	    twitter_consumer_key: '',
    	    twitter_consumer_secret: ''
    	}
    },*/
    /*{
      module: "MMM-Face-Recognition-SMAI",
      position: "top_right",
      config: {
        //prompt: "Put in your own text"
      }
    },*/
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
