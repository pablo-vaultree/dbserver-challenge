export default class ContainerService {
  constructor({ containerModel }) {
    this.containerModel = containerModel
  }

  getAll(deliverId) {
    let containers = this.containerModel.getAll(deliverId)

    return containers
  }

  get(containerId) {
    let container = this.containerModel.getById(containerId)

    return container
  }

  updateContainer(container) {
    container = this.containerModel.updateContainer(container)

    return container
  }
}
