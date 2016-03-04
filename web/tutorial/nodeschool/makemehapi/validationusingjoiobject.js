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
  return reply('login successful');
};

routeConfig = {
  path   : '/login',
  method : 'POST', 
  config : {
    handler : myHandler,
    validate: {
      payload: Joi.object({
        isGuest    : Joi.boolean().required(),
        username   : Joi.when('isGuest', { is: false, then: Joi.required() }),
        password   : Joi.string().alphanum(),
        accessToken: Joi.string().alphanum()
      }).options({ allowUnknown: true }).without('password', 'accessToken')
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