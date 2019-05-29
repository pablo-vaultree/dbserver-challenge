import mqttHandler from './mqtt_handler'
import config from './config'

const mqttClient = new mqttHandler()
mqttClient.connect()


const sendRandomData = () => {
  const temperatureRanges = [...Array(10).keys()];

  setInterval(() => {
    let measurementData = {
      temperature: getRandomItem(temperatureRanges),
      containerId: getRandomItem(containers)
    }

    mqttClient.sendMessage(measurementData)

  }, config.POOLLING_TIMER)
}

const getRandomItem = (range) => {
  return range[Math.floor(Math.random() * range.length)];
}

const seedContainersData = () => {
  return [1, 2, 3]
}

let containers = seedContainersData()

sendRandomData()