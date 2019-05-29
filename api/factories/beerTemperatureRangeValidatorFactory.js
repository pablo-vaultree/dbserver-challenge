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
  createTemperatureRangeValidator(beerType) {
    let validator

    switch (beerType) {
      case BeerType.PILSNER:
        validator = new PilsnerTemperatureRangeValidator()
        break;
      case BeerType.IPA:
        validator = new IpaTemperatureRangeValidator()
        break;
      case BeerType.LAGER:
        validator = new LagerTemperatureRangeValidator()
        break;
      case BeerType.STOUT:
        validator = new StoutTemperatureRangeValidator()
        break;
      case BeerType.WHEAT_BEER:
        validator = new WheatBeerTemperatureRangeValidator()
        break;
      case BeerType.PALE_ALE:
        validator = new PaleAleTemperatureRangeValidator()
        break;
      default:
        throw new Error("No temperature range validor for beer type " + beerType)
    }

    return validator
  }
}
