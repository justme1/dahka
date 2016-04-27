FROM node:argon
RUN npm install webpack-dev-server -g
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install 
EXPOSE 9000
CMD [ "npm", "start" ]

