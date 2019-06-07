# Name of Project

## Description

This is a startpack for a nodejs server running on Koa framework and koa-router for rest api.

## Installation

- clone Repo Nodejs
- Run `npm i`
- Install gulp globally with `npm install -g gulp`
- create a ".env" file in the root folder and add a variable PORT with the port number you want the server to run on e.g PORT = 5000
- compile TS to JS with gulp by running with `gulp`
- `node dist/server.js` or `npm run start` or `npm run server` or `npm run debug`

## NOTE

- Use the CustomError class to create Http error when handling error
