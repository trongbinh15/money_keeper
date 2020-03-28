FROM node:8

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm install --no-optional && npm cache clean --force 

COPY . . 

EXPOSE 3000

CMD ["npm", "start"]


