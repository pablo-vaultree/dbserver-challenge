import {
  IpaTemperatureRangeValidator,
  LagerTemperatureRangeValidator,
  WheatBeerTemperatureRangeValidator,
  PilsnerTemperatureRangeValidator,
  PaleAleTemperatureRangeValidator,
  StoutTemperatureRangeValidator
} from '../validators/beerTemperatureRangeValidator'

import BeerType from '../models/beers'

export default class BeerTemperatureRangeValidatorFactory {
  CreateTemperatureRangeValidator(beerType) {
    let validator;

    switch (beerType) {
      case BeerType.PILSNER:
        validator = new PilsnerTemperatureRangeValidator()
        break;
      case BeerType.IPA:
        validator = new IpaTemperatureRangeValidator()
        break;
      case beerType.LAGER:
        validator = new LagerTemperatureRangeValidator();
        break;
      case beerType.STOUT:
        validator = new StoutTemperatureRangeValidator();
        break;
      case beerType.WHEAT_BEER:
        validator = new WheatBeerTemperatureRangeValidator();
        break;
      case beerType.PALE_ALE:
        validator = new PaleAleTemperatureRangeValidator();
        break;
      default:
          throw new Error("No temperature range validor for beer type " + beerType);
        break;
    }

    return validator;
  }
}