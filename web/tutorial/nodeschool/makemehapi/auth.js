'use strict';

var
  Hapi          = require('hapi'),
  server        = new Hapi.Server(),
  portNum       = process.argv[2],
  Boom          = require('boom'),
  hapiAuthBasic = require('hapi-auth-basic'),
  Bcrypt        = require('bcrypt'),
  users         = {
    hapi: {
      username: 'hapi',
      password: 'auth'
    }
  },
  validate
  ;

server.connection({
  host: 'localhost',
  port: Number(portNum || 8080)
});

validate = function (request, username, password, callback) {
  var
    user = users[username],
    isValid
    ;
    
  isValid = user.username === username && password === user.password;
  return callback(null, isValid, { name: user.username });
};

server.register(hapiAuthBasic, function (err) {
  if (err) {return Boom.unauthorized('invalid password');}

  server.auth.strategy('simple', 'basic', { validateFunc: validate });

  server.route({
    method : 'GET',
    path   : '/',
    config : {
      auth   : 'simple',
      handler: function (request, reply) {
        reply();
      }
    }
  });
});

server.start(function (err) {
  if (err) {throw err;}
  console.log('Server running at: ', server.info.uri);
});