import beerType from './beers'

const containers = [
  {
    deliverId: 1,
    id: 1,
    beerType: beerType.IPA,
    beerCount: 50
  }
];

export default {
  getAll : (deliverId) => {
    return containers;
  },

  getById : (deliverId, containerId) => {
    return containers[0];
  }
};