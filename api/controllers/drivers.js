import { createController } from 'awilix-express' // or `awilix-router-core`

const API = ({ driverService }) => ({
  getAll: (req, res) => {
    res.send(driverService.getAll(req))
  },
  getDriver: (req, res) => {
    res.send(driverService.getAll(req))
  }
})

export default createController(API)
  .prefix('/drivers') // Prefix all endpoints with `/todo`
  .get('/', 'getAll') // Maps `GET /todos/:id` to the `getTodo` function on the returned object from `API`
  .get('/:id', 'getDriver') // Maps `GET /todos/:id` to the `getTodo` function on the returned object from `API`
