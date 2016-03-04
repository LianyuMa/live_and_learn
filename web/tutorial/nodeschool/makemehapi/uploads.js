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
  var body = '';
  request.payload.file.on('data', function (data) {
    body += data;
  });
  request.payload.file.on('end', function () {
    var content = {
      description: request.payload.description,
      file       : {
        data    : body,
        filename: request.payload.file.hapi.filename,
        headers : request.payload.file.hapi.headers
      }
    };
    reply(JSON.stringify(content));
  });
};

routeConfig = {
  path   : '/upload',
  method : 'POST', 
  config : {
    handler: myHandler,
    payload: {
      output: 'stream',
      parse : true,
      allow : 'multipart/form-data'
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