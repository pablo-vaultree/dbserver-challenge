export default class BeerTemperatureService {
  constructor({ containerService, beerTemperatureRangeValidatorFactory }) {
    this.beerTemperatureRangeValidatorFactory = beerTemperatureRangeValidatorFactory
    this.containerService = containerService
  }

  measureTemperature(containerId, temperatureMeasurement) {
    let container = this.containerService.get(containerId)

    const temperatureWarning = this.validateTemperatureRange(container.beerType, temperatureMeasurement)

    container.currentTemperature = temperatureMeasurement
    container.temperatureWarning = temperatureWarning

    container = this.containerService.updateContainer(container)

    return container
  }

  validateTemperatureRange(beerType, temperatureMeasurement) {
    let validator = this.beerTemperatureRangeValidatorFactory.createTemperatureRangeValidator(beerType)

    return validator.validateTemperatureRange(temperatureMeasurement)
  }
}
