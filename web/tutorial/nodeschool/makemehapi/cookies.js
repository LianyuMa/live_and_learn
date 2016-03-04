'use strict';

var
  Hapi    = require('hapi'),
  server  = new Hapi.Server(),
  portNum = process.argv[2],
  Boom    = require('boom')
  ;

server.connection({
  host: 'localhost',
  port: Number(portNum || 8080)
});

server.state('session', {
  path    : '/',
  ttl     : 10,
  encoding: 'base64json',
  domain  : 'localhost'
});

server.route({
  method : 'GET',
  path   : '/set-cookie',
  handler: function (request, reply) {
    return reply('success').state('session', { key: 'makemehapi' });
  },
  config : {
    state : {
      parse     : true,
      failAction: 'log'
    }
  }
});

server.route({
  method : 'GET',
  path   : '/check-cookie',
  handler: function (request, reply) {
    var session = request.state.session;
    if (!session) { return reply(Boom.unauthorized('Missing authentication'));}
    
    reply({ user: 'hapi' });
  }
});

server.start(function (err) {
  if (err) {throw err;}
  console.log('Server running at: ', server.info.uri);
});