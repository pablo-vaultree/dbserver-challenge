import config from './config'
import mqtt from 'mqtt'
import stringfy from 'stringify-object'

export default class MqttHandler {
  constructor() {
    this.mqttClient = null
    this.host = config.MQTT_HOST
  }

  connect() {
    this.mqttClient = mqtt.connect(this.host)

    this.mqttClient.on('error', (err) => {
      console.log(err)
      this.mqttClient.end()
    })

    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`)
    })

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`)
    })
  }

  sendMessage(newMeasurment) {
    console.log(JSON.stringify(newMeasurment))
    this.mqttClient.publish('update-measurement', JSON.stringify(newMeasurment))
  }
}
