import drivers from '../models/drivers'

export default class DriverService {
  constructor() {

  }

  getAll() {
    return drivers;
  }

  get(idx) {
    return drivers;
  }
}
