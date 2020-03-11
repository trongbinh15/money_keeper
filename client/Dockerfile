FROM node:8

WORKDIR /client

COPY package*.json /client/

RUN npm install

COPY . /client/

CMD ["npm", "start"]


