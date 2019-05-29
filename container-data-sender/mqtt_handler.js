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

  sendMessage(newMeasurement) {
    const stringMeasurementData = JSON.stringify(newMeasurement)
    console.log(stringMeasurementData)
    this.mqttClient.publish('update-measurement', stringMeasurementData)
  }
}
