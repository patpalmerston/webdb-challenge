const express = require('express');
const configureMiddleware = require('./data/config/middleware');

const projectsRouter = require('./data/projects/projects-router');

const server = express();

configureMiddleware(server)

server.use('/api/projects', projectsRouter);

server.get('/', (req, res, next) => {
  res.send(`<h2>Roll of the dice</h2>`)
})

module.exports = server;