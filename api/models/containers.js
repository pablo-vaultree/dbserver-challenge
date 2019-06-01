import beerType from './beers'

let containers = [
  {
    deliverId: 1,
    id: 1,
    beerType: beerType.PILSNER,
    beerCount: 50,
    currentTemperature: 5,
    temperatureWarning: true
  },
  {
    deliverId: 1,
    id: 2,
    beerType: beerType.IPA,
    beerCount: 50,
    currentTemperature: 5,
    temperatureWarning: false
  },
  {
    deliverId: 1,
    id: 3,
    beerType: beerType.STOUT,
    beerCount: 50,
    currentTemperature: 5,
    temperatureWarning: false
  },
  {
    deliverId: 1,
    id: 4,
    beerType: beerType.PALE_ALE,
    beerCount: 50,
    currentTemperature: 5,
    temperatureWarning: false
  },
  {
    deliverId: 1,
    id: 5,
    beerType: beerType.LAGER,
    beerCount: 50,
    currentTemperature: 5,
    temperatureWarning: false
  },
  {
    deliverId: 1,
    id: 6,
    beerType: beerType.WHEAT_BEER,
    beerCount: 50,
    currentTemperature: 5,
    temperatureWarning: false
  }
];

export default {
  getAll: (deliverId) => {

    return containers.filter(c => c.deliverId === parseInt(deliverId))
  },

  getById: (containerId) => {
    return containers.find(c => c.id === containerId)
  },

  updateContainer: (container) => {
    const index = containers.findIndex(c => c.id === container.id)

    containers[index] = container

    return container
  }
}
