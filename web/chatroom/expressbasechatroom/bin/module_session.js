//express_session
var session = require('express-session');
//session_store
var RedisStore = require("connect-redis")(session);

var sessionMiddleware = session({
    store: new RedisStore({}), // XXX redis server config
    secret: "lianyuma",
    resave: true,
    saveUninitialized: true
});

var module_session = {
  'session': session,
  'RedisStore': RedisStore,
  'sessionMiddleware': sessionMiddleware
};


module.exports = module_session;