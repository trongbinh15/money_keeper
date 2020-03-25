FROM node:8

RUN mkdir -p /usr/src/app 

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm install --no-optional && npm cache clean --force 

COPY . . 

EXPOSE 8080

ENV PORT=8080

CMD ["npm", "start"]