import { createController } from 'awilix-express' // or `awilix-router-core`
import bodyParser from 'body-parser'

const API = ({ containerService, beerTemperatureService, ioServer }) => ({
  getAll: (req, res) => {
    res.send(containerService.getAll(req))
  },
  getContainer: (req, res) => {
    const containerId = req.param.id
    const deliverId = req.param.deliverId

    res.send(containerService.get(containerId, deliverId))
  },

  mesureTemperature: (req, res) => {
    const containerId = req.param.id
    const deliverId = req.param.deliverId

    let container = containerService.get(deliverId, containerId)
    const temperatureWarning = beerTemperatureService.validateTemperatureRange(container.beerType, req.body.temperatureMeasurement)

    container.currentTemperature = req.body.temperatureMeasurement
    container.temperatureWarning = temperatureWarning

    container = containerService.updateContainer(container)

    ioServer.emit('update-mesurement', container)

    res.send(container)
  }
})

export default createController(API)
  .prefix('/deliveries/:deliverId/containers')
  .get('/', 'getAll')
  .get('/:id', 'getContainer')
  .put('/:id/temperature', 'mesureTemperature', {
    before: [bodyParser.json()]
  })
