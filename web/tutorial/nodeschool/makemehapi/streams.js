'use strict';

var
  Hapi    = require('hapi'),
  server  = new Hapi.Server(),
  fs      = require('fs'),
  path    = require('path'),
  rot13   = require('rot13-transform'),
  portNum = process.argv[2]
  ;

server.connection({
  host: 'localhost',
  port: Number(portNum || 8080)
});

server.route({
  method : 'GET',
  path   : '/',
  handler: function (request, reply) {
    var readStream = fs.createReadStream(path.join(__dirname, 'public/streams.txt'));

    readStream.on('open', function () {
      reply(readStream.pipe(rot13()));
    });

    readStream.on('error', function (err) {
      throw err;
    });
  }
});

server.start(function (err) {
  if (err) {throw err;}
  console.log('Server running at: ', server.info.uri);
});