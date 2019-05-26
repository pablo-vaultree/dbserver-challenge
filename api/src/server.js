import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import config from './config/config'
import containerModel from './models/containers'
import { asClass, createContainer, asValue, asFunction } from 'awilix'
import { loadControllers, scopePerRequest } from 'awilix-express'

let app = express()

createContainerDI(app);

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

var port = config.APP_PORT || 4000;
app.listen(port);

function createContainerDI(app) {
  
  const container = createContainer()
    .register({
      config: asValue(config),
      containerModel: asValue(containerModel)
    });

  const opts = {
    formatName: 'camelCase',
    cwd: __dirname
  }
  container.loadModules(
    [
      'services/*.js',
      'factories/*.js',
    ],
    opts
  )

  app.use(scopePerRequest(container))
  app.use(loadControllers('controllers/*.js', { cwd: __dirname }))
}