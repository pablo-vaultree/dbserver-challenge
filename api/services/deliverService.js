// A totally framework-independent piece of application code.
// Nothing here is remotely associated with HTTP, Express or anything.

import deliveries from '../models/deliveries'

export default class DeliverService {
    constructor() {

    }
    
    getAll() {
      // use your imagination ;)
      console.log('get deliver' + deliveries);

      return deliveries;
    }

    get(idx) {
        // use your imagination ;)
        return deliveries;
      }
  }
   