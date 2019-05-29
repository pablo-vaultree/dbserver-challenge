import beerType from './beers'

let containers = [
    {
        deliverId: 1,
        id: 1,
        beerType: beerType.IPA,
        beerCount: 50,
        currentTemperature: 5,
        temperatureWarning: false
    },
    {
        deliverId: 1,
        id: 2,
        beerType: beerType.PILSNER,
        beerCount: 50,
        currentTemperature: 5,
        temperatureWarning: true
    },
    {
        deliverId: 1,
        id: 4,
        beerType: beerType.IPA,
        beerCount: 50,
        currentTemperature: 5,
        temperatureWarning: false
    }
];

export default {
    getAll: (deliverId) => {
        return containers;
    },

    getById: (deliverId, containerId) => {
        return containers[0];
    },
    updateContainer: (container) => {
        containers[0] = container

        return container
    }
}