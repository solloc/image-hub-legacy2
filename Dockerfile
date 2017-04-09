FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install http server
#RUN npm install http-server -g

# Copy build components to work directory
COPY ./app/. /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]
