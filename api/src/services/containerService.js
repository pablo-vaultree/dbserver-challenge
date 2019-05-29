// A totally framework-independent piece of application code.
// Nothing here is remotely associated with HTTP, Express or anything.

export default class ContainerService {
    constructor({ containerModel }) {
        this.containerModel = containerModel
    }

    getAll(deliverId) {
        let containers = this.containerModel.getAll()

        return containers
    }

    get(containerId, deliverId) {
        let container = this.containerModel.getById(deliverId, containerId)

        return container
    }

    updateContainer(container) {
        container = this.containerModel.updateContainer(container)

        return container
    }
}
