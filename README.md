# Name of Project

## Description

This is a startpack for a nodejs server running on Koa framework.

## Features

- Logging
  1. morgan log into a file
  2. debug and error log functions log to console during development
  3. No log to console in production
- Cors
- Helmet

## Installation

- clone Repo Nodejs
- Run `npm i`
- Install gulp globally with `npm install -g gulp`
- Create a ".env" file in the project root folder to change the following from the default:

  1. NODE_ENV -- default is "dev"
  2. server port -- default is 5000 and save as PORT in .env
  3. color, and level for debug, error and http, and server using camelCase -- debugColor, debugLevel.

- Manage options for cors, helmet and morgan in their various file in src/config/middleware
- run `npm run server` to gulp and run server;
- run `npm run lint` to check for errors
-

## NOTE

- Use the HTTPError class to create Http error when handling error
