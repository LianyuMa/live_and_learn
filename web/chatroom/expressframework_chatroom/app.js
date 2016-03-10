var express = require('express');
//Socket.io
var socket_io = require('socket.io');
//mongoose
var mongoose = require('mongoose');
//express_session
var session = require('express-session');
//session_store
var sessionStore = new session.MemoryStore();

//todo: hash

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

//Express
var app = express();

// const KEY = 'cookieforchat';
// const SECRET = 'secret';

//mongodb connection

// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');

// var url = 'mongodb://localhost:27017/test';
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server.");
//   db.close();
// });




// //Socket.io
var io = socket_io();
app.io = io;

// var io = require('socket.io').listen(server);
// var SessionSockets = require('session.socket.io'),
//     sessionSockets = new SessionSockets(io, sessionStore, cookieParser);



var usersCount = 0;
var userList = [];


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(session({ resave: true,
                  saveUninitialized: true,
                  // secret: SECRET,
                  // name: KEY,
                  secret: 'secret',
                  store: sessionStore
}));

// app.use(session({ 
//                   secret: 'secret' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
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




// Socket.io events

// io.use(function(socket, next) {
//   var req = socket.request;
//   console.log('appuse:' + socket.request);
//   var res = {};
//   // var cookies = cookie.parse(req.headers.cookie);
//   cookieParser(req, res, function(err) {
//     var sessionID = req.signedCookies[KEY];
//     sessionStore.get(sessionID, function(err, session) {
//       if (err) {return next(err);}
//       if (! session) {return next(new Error('Session not found'))};
//       console.log('else entered');
//       socket.handshake.session = session;
//       session(req, res, next);
//     });
    
//   });
// });

io.on('connection', function(socket) {
  console.log('connected');
  console.log('Session: ', socket.request.session.user);
  socket.on('new user', function(username) {
  socket.username = socket.handshake.session.user;
     // socket.username = username;
    ++usersCount;
    socket.broadcast.emit('hi', {
      username: socket.username
    }); //broadcast messages when someone connects
    //online user list
    socket.broadcast.emit('show new user', {
      username: socket.username
    });
  });

  
  socket.on('input message', function(msg) {
    socket.broadcast.emit('output message', {
      username: socket.username,
      message: msg
    });
    console.log('message from ' + socket.username + ': ' + msg);
  });

  socket.on('typing', function() {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  socket.on('stop typing', function() {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  socket.on('disconnect', function() {
    console.log(socket.username + ' disconnected');
    --usersCount;
    socket.broadcast.emit('bye', {
      username: socket.username
    }); //broadcast messages when someone disconnects
    //update online user list
    socket.broadcast.emit('update left user', {
      username: socket.username
    });
  });
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
