import { should } from 'chai'
import {
  IpaTemperatureRangeValidator,
  LagerTemperatureRangeValidator,
  WheatBeerTemperatureRangeValidator,
  PilsnerTemperatureRangeValidator,
  PaleAleTemperatureRangeValidator,
  StoutTemperatureRangeValidator
} from '../../validators/beerTemperatureRangeValidator'

should()

describe('BeerTemperatureRangeValidator', () => {
  describe('#IpaTemperatureRangeValidator()', () => {
    let validator;

    beforeEach(() => {
      validator = new IpaTemperatureRangeValidator()
    })

    it('should return true when the value is between 5 and 6', () => {
      const temperatureMeasurement = 5

      const validateValue = validator.validateTemperatureRange(temperatureMeasurement)

      validateValue.should.equal(true)
    })

    it('should return false when the value is between 5 and 6', () => {
      const minTemperatureMeasurement = 4
      const maxTemperatureMeasurement = 7

      let validateValue = validator.validateTemperatureRange(minTemperatureMeasurement)
      validateValue.should.equal(false)

      validateValue = validator.validateTemperatureRange(maxTemperatureMeasurement)
      validateValue.should.equal(false)
    })
  })

  describe('#LagerTemperatureRangeValidator()', () => {
    it('should return true when the value is between 4 and 7', () => {
      const temperatureMeasurement = 5
      const validator = new LagerTemperatureRangeValidator()

      const validateValue = validator.validateTemperatureRange(temperatureMeasurement)

      validateValue.should.equal(true)
    })

    it('should return false when the value is between 4 and 7', () => {
      const minTemperatureMeasurement = 3
      const maxTemperatureMeasurement = 8

      const validator = new LagerTemperatureRangeValidator()

      let validateValue = validator.validateTemperatureRange(minTemperatureMeasurement)
      validateValue.should.equal(false)

      validateValue = validator.validateTemperatureRange(maxTemperatureMeasurement)
      validateValue.should.equal(false)
    })
  })

  describe('#WheatBeerTemperatureRangeValidator()', () => {
    it('should return true when the value is between 3 and 5', () => {
      const temperatureMeasurement = 5
      const validator = new WheatBeerTemperatureRangeValidator()

      const validateValue = validator.validateTemperatureRange(temperatureMeasurement)

      validateValue.should.equal(true)
    })

    it('should return false when the value is between 3 and 5', () => {
      const minTemperatureMeasurement = 2
      const maxTemperatureMeasurement = 7

      const validator = new WheatBeerTemperatureRangeValidator()

      let validateValue = validator.validateTemperatureRange(minTemperatureMeasurement)
      validateValue.should.equal(false)

      validateValue = validator.validateTemperatureRange(maxTemperatureMeasurement)
      validateValue.should.equal(false)
    })
  })

  describe('#PilsnerTemperatureRangeValidator()', () => {
    it('should return true when the value is between 4 and 6', () => {
      const temperatureMeasurement = 5
      const validator = new PilsnerTemperatureRangeValidator()

      const validateValue = validator.validateTemperatureRange(temperatureMeasurement)

      validateValue.should.equal(true)
    })

    it('should return false when the value is between 4 and 6', () => {
      const minTemperatureMeasurement = 3
      const maxTemperatureMeasurement = 7

      const validator = new PilsnerTemperatureRangeValidator()

      let validateValue = validator.validateTemperatureRange(minTemperatureMeasurement)
      validateValue.should.equal(false)

      validateValue = validator.validateTemperatureRange(maxTemperatureMeasurement)
      validateValue.should.equal(false)
    })
  })

  describe('#PaleAleTemperatureRangeValidator()', () => {
    it('should return true when the value is between 4 and 6', () => {
      const temperatureMeasurement = 5
      const validator = new PaleAleTemperatureRangeValidator()

      const validateValue = validator.validateTemperatureRange(temperatureMeasurement)

      validateValue.should.equal(true)
    })

    it('should return false when the value is between 4 and 6', () => {
      const minTemperatureMeasurement = 3
      const maxTemperatureMeasurement = 7

      const validator = new PaleAleTemperatureRangeValidator()

      let validateValue = validator.validateTemperatureRange(minTemperatureMeasurement)
      validateValue.should.equal(false)

      validateValue = validator.validateTemperatureRange(maxTemperatureMeasurement)
      validateValue.should.equal(false)
    })
  })

  describe('#StoutTemperatureRangeValidator()', () => {
    it('should return true when the value is between 6 and 8', () => {
      const temperatureMeasurement = 7
      const validator = new StoutTemperatureRangeValidator()

      const validateValue = validator.validateTemperatureRange(temperatureMeasurement)

      validateValue.should.equal(true)
    })

    it('should return false when the value is between 6 and 8', () => {
      const minTemperatureMeasurement = 5
      const maxTemperatureMeasurement = 9

      const validator = new StoutTemperatureRangeValidator()

      let validateValue = validator.validateTemperatureRange(minTemperatureMeasurement)
      validateValue.should.equal(false)

      validateValue = validator.validateTemperatureRange(maxTemperatureMeasurement)
      validateValue.should.equal(false)
    })
  })
})
