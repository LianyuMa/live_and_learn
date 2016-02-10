module.exports = function(server) {
  var io = require('socket.io')(server);
  // catch errors
  io.on('error', function(err){
    throw err;
  });

  // Set Socket.io listeners by creating a socket.io middleware
  // attachEventlisteners would live in `/controllers`
  io.use(attachEventlisteners);

  io.on('connection', function(socket) {
    console.log('a user connected');
    socket.broadcast.emit('hi'); //broadcast messages when someone connects
    socket.on('chat message', function(msg) {
      io.emit('chat message', msg);
      console.log('message: ' + msg);
    });
    socket.on('disconnect', function() {
      console.log('user disconnected');
      socket.broadcast.emit('bye'); //broadcast messages when someone disconnects
    });
  });

  return io; // so it can be used in app.js ( if need be )
}