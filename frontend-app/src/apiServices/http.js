import axios from 'axios'
import config from '../../config/config'

const client = axios.create({
  baseURL: config.API_ROOT,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json'
  }
})

export default client
