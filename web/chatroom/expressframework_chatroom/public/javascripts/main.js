var socket = io();
//broadcast messages when someone connects
socket.on('hi', function() {
  $('#messages').append($('<li>').text('A user connected'));
});

$('form').submit(function() {
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});

socket.on('chat message', function(msg) {
  $('#messages').append($('<li>').text(msg));
});

//broadcast messages when someone disconnects
socket.on('bye', function() {
  $('#messages').append($('<li>').text('A user left'));
});