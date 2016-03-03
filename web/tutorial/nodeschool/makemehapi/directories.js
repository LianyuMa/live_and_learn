'use strict';

var
  Hapi    = require('hapi'),
  server  = new Hapi.Server(),
  path    = require('path'),
  Inert   = require('inert'),
  portNum = process.argv[2]
  ;

server.connection({
  host: 'localhost',
  port: Number(portNum || 8080),
});

server.register(Inert, function (err) {
  if (err) {throw err;}
});

server.route({
  path   : '/foo/bar/baz/{param}',
  method : 'GET',
  handler: {
    directory: { path: path.join(__dirname, '/public') }
  }
});

server.start(function (err) {
  if (err) {throw err;}
  console.log('Server running at: ', server.info.uri);
});