FROM node:12
LABEL maintainer="rafaelrodriguezcalvente@gmail.com"
WORKDIR /ApiNodeJS
COPY package*.json /ApiNodeJS/
RUN npm install
COPY . .
CMD ["npm","start"]