var express = require('express');

var module_session = require('./bin/module_session');


//express_session
var session = module_session.session;
//session_store
var RedisStore = module_session.RedisStore;
var sessionMiddleware = module_session.sessionMiddleware;

//stylus
var stylus = require('stylus');
var nib = require('nib');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//ctylus compile
function compile(str, path) {
  return stylus(str).set('filename', path).use(nib());
}

// var sessionMiddleware = session({
//     store: new RedisStore({}), // XXX redis server config
//     secret: "lianyuma",
// });

// var sessionMiddleware = session({
//   name: 'sid',
//   store: sessionStore, // MemoryStore
//   secret: 's3cr37',
//   saveUninitialized: true,
//   resave: true,
// });


app.use(sessionMiddleware);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));

//use stylus middleware
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
));

// app.use(session({ resave: true,
//                   saveUninitialized: true,
//                   // secret: SECRET,
//                   // name: KEY,
//                   secret: 'secret',
//                   store: sessionStore
// }));

// app.use(session({ 
//                   secret: 'secret' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.use(function (req, res, next) {
    var err = req.session.error,
        msg = req.session.success;
    delete req.session.error;
    delete req.session.success;
    res.locals.message = '';
    if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
    if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
    next();
});








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;