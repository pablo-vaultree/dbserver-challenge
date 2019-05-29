import { createController } from 'awilix-express'

const API = ({ driverService }) => ({
  getAll: (req, res) => {
    res.send(driverService.getAll(req))
  },
  getDriver: (req, res) => {
    res.send(driverService.getAll(req))
  }
})

export default createController(API)
  .prefix('/drivers')
  .get('/', 'getAll')
  .get('/:id', 'getDriver')
