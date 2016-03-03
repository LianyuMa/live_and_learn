'use strict';

var
  Hapi       = require('hapi'),
  server     = new Hapi.Server(),
  path       = require('path'),
  Vision     = require('vision'),
  handlebars = require('handlebars'),
  portNum    = process.argv[2]
  ;

server.connection({
  host: 'localhost',
  port: Number(portNum || 8080)
});

server.register(Vision, function (err) {
  if (err) {throw err;}
});

server.route({
  path   : '/',
  method : 'GET',
  handler: {
    view: 'helping_index.html'
  }
});

server.views({
  engines    : {
    html: handlebars
  },
  path       : path.join(__dirname, 'templates'),
  helpersPath: 'helpers'
});

server.start(function (err) {
  if (err) {throw err;}
  console.log('Server running at: ', server.info.uri);
});