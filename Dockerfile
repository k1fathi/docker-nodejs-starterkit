# Dockerfile
FROM node

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY app.js /usr/src/app/app.js

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]
