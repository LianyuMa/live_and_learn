$(function() {

  var $loginPage = $('.login');
  var $chatPage = $('.chat');
  var $username;

  var socket = io();
  //broadcast messages when someone connects
  socket.on('hi', function(data) {
    $('#messages').append($('<li>').text(data.username + ' connected'));
  });

  $('#loginform').submit(function() {
    $username = $('#loginInput').val();
    $loginPage.fadeOut();
    $chatPage.show();

    socket.emit('new user', $username);
    return false;//Cancle the submit
  });

  $('#chatform').submit(function() {
    var $inputMsg = $('#m').val();
    if ($inputMsg) {
      outputMessage({
        username: $username,
        message: $inputMsg
      });
      socket.emit('input message', $inputMsg);
      
    } else{}
    
    $('#m').val('');
    return false;   
  });

  function outputMessage (data) {
    $('#messages').append($('<li>').text(data.username + ": " + data.message));
  }

  socket.on('output message', function(data) {
    outputMessage({
      username: data.username,
      message: data.message
    });
  });

  //broadcast messages when someone disconnects
  socket.on('bye', function(data) {
    $('#messages').append($('<li>').text(data.username + ' left'));
  });
});