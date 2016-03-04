'use strict';

var
  Hapi    = require('hapi'),
  fs      = require('fs'),
  path    = require('path'),
  server  = new Hapi.Server(),
  Joi     = require('joi'),
  portNum = process.argv[2],
  routeConfig, myHandler
  ;

myHandler = function (request, reply) {
  return reply('hello');
};

routeConfig = {
  path: '/chickens/{breed}',
  method: 'GET',
  handler: myHandler,
  config: {
    validate: {
      params: {
        with: Joi.string().required(),
        parameters: Joi.string().required()
      }
    }
  }
};

server.connection({
  host: 'localhost',
  port: Number(portNum || 8080)
});

server.route(routeConfig);

server.start(function (err) {
  if (err) {throw err;}
  console.log('Server running at: ', server.info.uri);
});