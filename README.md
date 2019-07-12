# Name of Project

## Description

This is a startpack for a nodejs server running on Koa framework.

## Features

- Logging
- Cors
- Helmet

## Installation

- clone Repo Nodejs
- Run `npm i`
- Install gulp globally with `npm install -g gulp`
- Create a ".env" file in the project root folder to change the following from the default:

  1. ENV -- default is "dev"
  2. server port -- default is 5000 and save as PORT in .env
  3. color, and level for debug, error and http, and server using camelCase -- debugColor, debugLevel.

- Manage options for cors, helmet and morgan in their various file in src/config/middleware
- compile TS to JS by running `gulp`
- `node dist/server.js` or `npm run start` or `npm run server` or `npm run debug` for vscode

## NOTE

- Use the CustomError class to create Http error when handling error
