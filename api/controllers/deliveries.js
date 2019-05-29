import { createController } from 'awilix-express' // or `awilix-router-core`

const API = ({ deliverService }) => ({
  getAll: (req, res) => {
    res.send(deliverService.getAll(req))
  },
  getDeliver: (req, res) => {
    res.send(deliverService.getAll(req))
  }
})

export default createController(API)
  .prefix('/deliveries') // Prefix all endpoints with `/todo`
  .get('/', 'getAll') // Maps `GET /todos/:id` to the `getTodo` function on the returned object from `API`
  .get('/:id', 'getDeliver') // Maps `GET /todos/:id` to the `getTodo` function on the returned object from `API`
