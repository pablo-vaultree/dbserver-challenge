import dotenv from 'dotenv'

dotenv.config()

console.log(process.env.MQTT_HOST)

export default {
    MQTT_HOST: process.env.MQTT_HOST,
    POOLLING_TIMER: 1000
}
