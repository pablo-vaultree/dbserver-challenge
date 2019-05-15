So initially I would start talking with the stakeholders and domain specialists to set a ubiquitous language
between all the people involved in the project.

Some questions I had when reading the case:

_*1. How would be loaded the data of the truck? Those data are going to be filled by the driver? If not by him, how would be that?*_

We need a way to track the load of containers, the IoT sensors and the device for monitoring the components data. Since I can't have how to extract this information I will set that:

The driver will have an app, the app receives a delivery job and that deliver job will have the data for monitoring. The data will be:
- Containers  load
- IoT sensors ID

_*2. What type of IoT stack would be used? (these define communication style between the components)*_

The type of IoT sensor can reflect the type of architecture that will be needed.  I started investigating good practices for this type of context and saw that an MQTT protocol sensor could be a good fit.  With that in mind I start a pub/sub app with almost real-time data for the temperature.

_*3. How would be the notification for the driver? SMS, Push notification in an app, Showing the warning in a screen?*_

Here I set the simplest solution, a web app for the driver. In that app he can log in, and see delivers he has to do, inside the delivery information he sees the containers data in real time. Each container will show a health indicator and the anything outside the range will notify in screen for him.


### Domain Requesities

Studying the solution needed I found the main context here is a Deliver App monitoring. 

- Driver
- Deliver 
- Container
- Beer 

Refrigeration needs

- Beer 1 (Pilsner) - 4°C - 6°C
- Beer 2 (IPA) - 5°C - 6°C
- Beer 3 (Lager) - 4°C - 7°C
- Beer 4 (Stout) - 6°C - 8°C
- Beer 5 (Wheat beer) - 3°C - 5°C
- Beer 6 (Pale Ale) - 4°C - 6°C

### Architectural Requesities

- an app to represent an IoT device publishing an MQTT message
- a server app to listen and process the device data
- an API to process deliveries to the driver
- an app to show the driver the deliveries

### Studying needed

- DDD and javascript, best practices
- Design patterns and JS 
- How to implement MQTT 
- Best practices on pub/sub with node.js 