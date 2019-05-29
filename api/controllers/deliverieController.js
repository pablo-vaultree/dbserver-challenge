import { createController } from 'awilix-express'

const API = ({ deliverService }) => ({
  getAll: (req, res) => {
    res.send(deliverService.getAll(req))
  },
  getDeliver: (req, res) => {
    res.send(deliverService.getAll(req))
  }
})

export default createController(API)
  .prefix('/deliveries')
  .get('/', 'getAll')
  .get('/:id', 'getDeliver')
