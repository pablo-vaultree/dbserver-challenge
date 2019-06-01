'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env').default

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_ROOT: '"http://localhost:4000"'
})
