FROM node:19

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

EXPOSE 3000

ENV REACT_APP_OPENWEATHER_API_KEY=44567ef0c8c9b2c56523b59262b783d9
ENV REACT_APP_BASE_URL=http://api.openweathermap.org/data/2.5


CMD ["npm", "start"]
