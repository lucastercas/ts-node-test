FROM node:13.12
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
