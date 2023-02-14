FROM node:alphine
WORKDIR /usr/src/app

COPY ./package*.json ./
RUN npm install
COPY ./server.js ./

CMD ["nmp", "start"]
