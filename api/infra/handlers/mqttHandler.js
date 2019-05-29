// import mqtt from 'mqtt'

// const temperatureSensorBusTopic = 'new-tempterature-measure';

// export default class MqttHandler {

//   constructor({config}) {
//     this.mqttClient = null;
//     this.host = config.MQTT_HOST;
//   }

//   connect() {
//     this.mqttClient = mqtt.connect(this.host);

//     // Mqtt error calback
//     this.mqttClient.on('error', (err) => {
//       console.log(err);
//       this.mqttClient.end();
//     });

//     // Connection callback
//     this.mqttClient.on('connect', () => {
//       console.log(`mqtt client connected`);
//     });

//     // mqtt subscriptions
//     this.mqttClient.subscribe('mytopic', {qos: 0});

//     // When a message arrives, console.log it
//     this.mqttClient.on('message', function (topic, message) {
//       console.log(message.toString());
//     });

//     this.mqttClient.on('close', () => {
//       console.log(`mqtt client disconnected`);
//     });
//   }
// }
