const express = require("express");
const server = express();
const jokesRouter = require('./jokes/jokes-router')

server.use(express.json());
server.use('/api/jokes', jokesRouter)

module.exports = server