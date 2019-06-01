# PragmaBrewery Delivery

Control beer transportation with realtime sensor data [![CircleCI](https://circleci.com/gh/pablofeijo/dbserver-challenge/tree/master.svg?style=svg)](https://circleci.com/gh/pablofeijo/dbserver-challenge/tree/master)

## Quick start

1. Install Docker and Docker Compose (https://docs.docker.com/compose/install/)
2. Clone the repository with `git clone --depth=1 https://github.com/pablofeijo/dbserver-challenge`
3. `cd dbserver-challenge`
4. `docker-compose up`
5. Hit `http://localhost:8081` and you're seeing real time data!

## Deploy ready production

``` bash

# clone it
git clone --depth=1 https://github.com/pablofeijo/dbserver-challenge

# build and run it with prod env!
sh deploy.sh
```

## Tech

- [Node v7.6+](http://nodejs.org/)
- [Express](https://npmjs.com/package/express)
- [MQTT](https://www.npmjs.com/package/mqtt)
- [Awilix](https://www.npmjs.com/package/awilix)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Chai](https://www.npmjs.com/package/chai)
- [Vue](https://www.npmjs.com/package/vue)
- [axios](https://www.npmjs.com/package/axios)
- [esm](https://www.npmjs.com/package/esm)
- [dotenv](https://www.npmjs.com/package/esm)
- [awilix-express](https://www.npmjs.com/package/esm)
- [socket.io](https://www.npmjs.com/package/socket.io)
- [supertest](https://www.npmjs.com/package/supertest)
