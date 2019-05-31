FROM node:9.11.1-alpine

ENV PORT=4000

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install --quiet

COPY . .

EXPOSE 4000

# CMD [ "npm", "run", "run"]
