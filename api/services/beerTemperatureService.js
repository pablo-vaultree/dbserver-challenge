export default class BeerTemperatureService {

    constructor({ beerTemperatureRangeValidatorFactory }) {
        this.beerTemperatureRangeValidatorFactory = beerTemperatureRangeValidatorFactory
    }

    validateTemperatureRange(beerType, temperatureMeasurement) {
        let validator = this.beerTemperatureRangeValidatorFactory.createTemperatureRangeValidator(beerType)

        return validator.validateTemperatureRange(temperatureMeasurement)
    }
}