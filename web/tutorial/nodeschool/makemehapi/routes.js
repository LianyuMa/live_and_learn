'use strict';

var
  Hapi   = require('hapi'),
  server = new Hapi.Server(),
  portNum = process.argv[2]
  ;

server.connection({
  host: 'localhost',
  port: Number(portNum || 8080)
});

server.route({ path: '/{name}', method: 'GET', handler: function (request, reply) {
  reply('Hello ' + encodeURIComponent(request.params.name));
} });

server.start(function (err) {
  if (err) {return console.error(err);}
  console.log('Server running at: ', server.info.uri);
});