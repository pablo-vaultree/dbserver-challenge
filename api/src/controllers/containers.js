import { createController } from 'awilix-express' // or `awilix-router-core`
import bodyParser from 'body-parser'
 
const API = ({ containerService, beerTemperatureService }) => ({
    getAll: (req, res) => {
        res.send(containerService.getAll(req))
    },
    getContainer: (req, res) => {        
        const containerId = req.param.id;
        const deliverId = req.param.deliverId;

        res.send(containerService.get(containerId, deliverId))
    },

    mesureTemperature: (req, res) => {
        const containerId = req.param.id;
        const deliverId = req.param.deliverId;

        let container = containerService.get(deliverId, containerId);        
        let temperatureWarning = beerTemperatureService.validateTemperatureRange(container.beerType, req.body.temperatureMeasurement);

        container.temperatureWarning = temperatureWarning;

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