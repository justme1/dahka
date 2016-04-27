FROM node:argon
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install && npm install -g node-inspector && npm install -g supervisor
EXPOSE 8080 8085 5858
CMD [ "npm", "start" ]

