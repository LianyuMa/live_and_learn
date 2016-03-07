var io = require('socket.io')();

//express_session
var session = require('express-session');

var RedisStore = require("connect-redis")(session);

var sessionMiddleware = session({
    store: new RedisStore({}), // XXX redis server config
    secret: "lianyuma",
});

io.use(function(socket, next) {
  sessionMiddleware(socket.request, socket.request.res, next);
});


io.on('connection', function(socket) {
  console.log('connected');

  var curname = socket.request.session.user;
  console.log(curname.username + ' entered into chatroom');

  socket.broadcast.emit('hi', {
    username: socket.username
  });

  socket.broadcast.emit('show new user', {
      username: socket.username
  });

  //console.log('Session: ', socket.request.session.user);
  socket.on('new user', function(username) {
  //socket.username = socket.handshake.session.user;
    socket.username = curname.username;
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
    socket.broadcast.emit('bye', {
      username: socket.username
    }); //broadcast messages when someone disconnects
    //update online user list
    socket.broadcast.emit('update left user', {
      username: socket.username
    });
  });
});

module.exports = io;