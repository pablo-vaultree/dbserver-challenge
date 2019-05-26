// A totally framework-independent piece of application code.
// Nothing here is remotely associated with HTTP, Express or anything.

import drivers from '../models/drivers'
export default class DriverService {
    constructor() {

    }
    
    getAll() {
      // use your imagination ;)
      console.log('get drivers' + drivers);

      return drivers;
    }

    get(idx) {
        // use your imagination ;)
        return drivers;
      }
  }
   