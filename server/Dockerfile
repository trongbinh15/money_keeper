FROM node:8

RUN mkdir -p /app/server

WORKDIR /app/server

COPY package*.json /app/server/

RUN npm install

COPY . /app/server/

EXPOSE 8080

ENV PORT=8080

CMD ["npm", "start"]