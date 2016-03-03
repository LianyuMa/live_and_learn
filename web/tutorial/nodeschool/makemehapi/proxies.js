'use strict';

var
  Hapi    = require('hapi'),
  server  = new Hapi.Server(),
  h2o2    = require('h2o2'),
  portNum = process.argv[2]
  ;

server.connection({
  host: 'localhost',
  port: Number(portNum || 8080)
});

server.register({ register: h2o2 }, function (err) {
  if (err) {
    throw err;
  }
});

server.route({
  method : 'GET',
  path   : '/proxy',
  handler: {
    proxy: {
      host: 'localhost',
      port: 65535
    }
  }
});

server.start(function (err) {
  if (err) {return console.error(err);}
  console.log('Server started at: ' + server.info.uri);
});