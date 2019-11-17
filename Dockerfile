FROM node as build

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node

WORKDIR /usr/app
COPY package.json ./
RUN npm install --production

COPY --from=build /usr/app/dist ./dist
COPY .env .

EXPOSE 5000

CMD node dist/server.js
