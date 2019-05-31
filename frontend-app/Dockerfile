FROM node:9.11.1-alpine

ENV PORT=8081

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install -g http-server

RUN npm install --silent

COPY . .

RUN npm run build

EXPOSE 8081

CMD [ "http-server", "dist" ]
