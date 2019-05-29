import { createController } from 'awilix-express'
import bodyParser from 'body-parser'

const API = ({ containerService, beerTemperatureService }) => ({
  getAll: (req, res) => {
    const deliverId = req.params.deliverId

    res.send(containerService.getAll(deliverId))
  },

  getContainer: (req, res) => {
    const deliverId = parseInt(req.params.deliverId)
    const containerId = parseInt(req.params.id)

    res.send(containerService.get(containerId, deliverId))
  },

  mesureTemperature: (req, res) => {
    const containerId = parseInt(req.params.id)
    const container = beerTemperatureService.measureTemperature(containerId, req.param.measureTemperature)

    res.send(container)
  }
})

export default createController(API)
  .prefix('/deliveries/:deliverId/containers')
  .get('/', 'getAll')
  .get('/:id', 'getContainer')
  .put('/:id/temperature', 'mesureTemperature', {
    before: [bodyParser()]
  })
