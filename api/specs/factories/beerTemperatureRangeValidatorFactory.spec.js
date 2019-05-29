import { expect } from 'chai'
import BeerTemperatureRangeValidatorFactory from '../../factories/beerTemperatureRangeValidatorFactory'
import BeerType from '../../models/beers'
import {
  IpaTemperatureRangeValidator,
  LagerTemperatureRangeValidator,
  WheatBeerTemperatureRangeValidator,
  PilsnerTemperatureRangeValidator,
  PaleAleTemperatureRangeValidator,
  StoutTemperatureRangeValidator
} from '../../validators/beerTemperatureRangeValidator'

describe('BeerTemperatureRangeValidatorFactory', () => {
  describe('#createTemperatureRangeValidator()', () => {
    let factory;

    beforeEach(() => {
      factory = new BeerTemperatureRangeValidatorFactory()
    })

    it('should return PilsnerTemperatureRangeValidator when beer type is PILSNER', () => {
      const beerType = BeerType.PILSNER

      const validator = factory.createTemperatureRangeValidator(beerType)
      expect(validator).to.an.instanceof(PilsnerTemperatureRangeValidator)
    })

    it('should return IpaTemperatureRangeValidator when beer type is IPA', () => {
      const beerType = BeerType.IPA

      const validator = factory.createTemperatureRangeValidator(beerType)
      expect(validator).to.an.instanceof(IpaTemperatureRangeValidator)
    })

    it('should return WheatBeerTemperatureRangeValidator when beer type is WHEAT_BEER', () => {
      const beerType = BeerType.WHEAT_BEER

      const validator = factory.createTemperatureRangeValidator(beerType)
      expect(validator).to.an.instanceof(WheatBeerTemperatureRangeValidator)
    })

    it('should return LagerTemperatureRangeValidator when beer type is LAGER', () => {
      const beerType = BeerType.LAGER

      const validator = factory.createTemperatureRangeValidator(beerType)
      expect(validator).to.an.instanceof(LagerTemperatureRangeValidator)
    })

    it('should return PaleAleTemperatureRangeValidator when beer type is PALE_ALE', () => {
      const beerType = BeerType.PALE_ALE

      const validator = factory.createTemperatureRangeValidator(beerType)
      expect(validator).to.an.instanceof(PaleAleTemperatureRangeValidator)
    })

    it('should return StoutTemperatureRangeValidator when beer type is STOUT', () => {
      const beerType = BeerType.STOUT

      const validator = factory.createTemperatureRangeValidator(beerType)
      expect(validator).to.an.instanceof(StoutTemperatureRangeValidator)
    })

    it('should return throw error when beer type is not registred', () => {
      const beerType = 'WEIS'

      expect(() => {
        const validator = factory.createTemperatureRangeValidator(beerType)
      }).to.throw()
    })
  })
})
