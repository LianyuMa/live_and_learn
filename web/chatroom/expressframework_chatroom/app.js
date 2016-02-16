var express = require('express');
//Socket.io
var socket_io = require("socket.io");

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//Socket.io
var io = socket_io();
app.io = io;

var usersCount = 0;
var userList = [];

//Socket.io events
io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('new user', function(username) {
    socket.username = username;
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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

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
