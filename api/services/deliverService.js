import deliveries from '../models/deliveries'

export default class DeliverService {
  constructor() {

  }

  getAll() {
    return deliveries;
  }

  get(idx) {
    return deliveries;
  }
}
