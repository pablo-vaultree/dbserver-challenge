# container-data-sender fake module

> Sending fake real-time data to the api

## Build Setup

``` bash

# start mqtt server
docker run -ti -d -p 1883:1883 -p 9001:9001 toke/mosquitto

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run for production
npm run run
