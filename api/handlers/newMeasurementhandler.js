export default class NewMeasurementhandler {
  constructor({ mqttServer, ioServer, beerTemperatureService, config }) {
    this.mqttServer = mqttServer
    this.ioServer = ioServer
    this.beerTemperatureService = beerTemperatureService
    this.mqttClient = this.mqttServer.connect(config.MQTT_HOST)
  }

  listen() {
    const updateMeasurementTopic = 'update-measurement'


    this.mqttClient.on('error', (err) => {
      this.mqttClient.end()
    })

    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`)
    })

    this.mqttClient.subscribe(updateMeasurementTopic, { qos: 0 });

    this.mqttClient.on('message', (topic, measurementData) => {
      const data = JSON.parse(measurementData.toString('utf-8'))

      const container = this.beerTemperatureService.measureTemperature(data.containerId, data.temperature)
      this.ioServer.emit(updateMeasurementTopic, container)
    })

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`)
    })
  }
}
