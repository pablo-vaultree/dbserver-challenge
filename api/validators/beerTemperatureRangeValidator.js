class BeerTemperatureRangeValidator {

  validateTemperatureRange(temperatureMeasurement) {
    let minrange = temperatureMeasurement >= this.minTemperatureRange;
    let maxrange = temperatureMeasurement <= this.maxTemperatureRange;

    return !(minrange && maxrange);
  }
}

class IpaTemperatureRangeValidator extends BeerTemperatureRangeValidator {
  constructor() {
    super();

    this.minTemperatureRange = 5;
    this.maxTemperatureRange = 6;
  }
}

class LagerTemperatureRangeValidator extends BeerTemperatureRangeValidator {
  constructor() {
    super();

    this.minTemperatureRange = 4;
    this.maxTemperatureRange = 7;
  }
}

class WheatBeerTemperatureRangeValidator extends BeerTemperatureRangeValidator {
  constructor() {
    super();

    this.minTemperatureRange = 3;
    this.maxTemperatureRange = 5;
  }
}

class PilsnerTemperatureRangeValidator extends BeerTemperatureRangeValidator {
  constructor() {
    super();

    this.minTemperatureRange = 4;
    this.maxTemperatureRange = 6;
  }
}

class PaleAleTemperatureRangeValidator extends BeerTemperatureRangeValidator {
  constructor() {
    super();

    this.minTemperatureRange = 4;
    this.maxTemperatureRange = 6;
  }
}

class StoutTemperatureRangeValidator extends BeerTemperatureRangeValidator {
  constructor() {
    super();

    this.minTemperatureRange = 6;
    this.maxTemperatureRange = 8;
  }
}

export {
  IpaTemperatureRangeValidator,
  LagerTemperatureRangeValidator,
  WheatBeerTemperatureRangeValidator,
  PilsnerTemperatureRangeValidator,
  PaleAleTemperatureRangeValidator,
  StoutTemperatureRangeValidator
}
