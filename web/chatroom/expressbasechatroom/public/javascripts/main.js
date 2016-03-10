$(function() {

  //var $loginPage = $('.login');
  var $chatPage = $('.chat');
  var clientname;

  var lastTypingTime;
  var TYPING_TIMEOUT = 500;
  var typing = false; 

  var socket = io();
  //broadcast messages when someone connects

  function getCurTime () {
    var myDate = new Date();
    return myDate.toLocaleTimeString();
  }

  function cleanInput (dirty) {
    return $('<div/>').text(dirty).text();
  }  

  socket.on('greeting', function(data) {
    clientname = data.username;

    $('#messages').append($('<li class="welcome">').text('Welcome to chatroom: ' + clientname));
      
  });

  socket.emit('new user', clientname);

  socket.on('hi', function(data) {
    $('#messages').append($('<li class="notice">').text(getCurTime() + " " + data.username + ' connected'));
  });

      
  
  // $('#loginform').submit(function() {
  //   clientname = $('#loginInput').val();
  //   $loginPage.fadeOut();
  //   $chatPage.show();

  //   socket.emit('new user', clientname);
  //   return false;//Cancle the submit
  // });

  $('#chatform').submit(function() {
    var $inputMsg = $('#m').val();
    $inputMsg = cleanInput($inputMsg);
    if ($inputMsg) {
      outputMessage({
        username: clientname,
        message: $inputMsg
      });
      socket.emit('input message', $inputMsg);
      
    } else{}
    
    $('#m').val('');
    return false;   
  });

  $('#m').focus(function() {
    $('#m').keydown(function(event) {
      if (!typing) {
        socket.emit('typing');
        typing = true;
      }

      lastTypingTime = (new Date()).getTime();

      setTimeout(function() {
        var timeoutTimer = (new Date()).getTime();
        var difftime = timeoutTimer - lastTypingTime;
        if (difftime >= TYPING_TIMEOUT && typing) {
          socket.emit('stop typing');
          typing = false;
        }
      }, TYPING_TIMEOUT);

    });
  });

  function outputMessage (data) {
    $('#messages').append($('<li>').text(getCurTime() + " " + data.username + ": " + data.message));
  }

  socket.on('output message', function(data) {
    outputMessage({
      username: data.username,
      message: data.message
    });
  });

  function outputStatus (data) {
    $('#status').append($('<li>').text(data.username + ' is typing...'));
  }

  function outputOffStatus (data) {
    $('#status').append($('<li>').text(data.username + ' finishes typing.'));
  }

  socket.on('show new user', function(data) {
    $('#list').append($('<li>').text(data.username + ' is online now'));
  });

  socket.on('update left user', function(data) {
    $('#list li:contains(' + data.username + ')').remove();
  });

  socket.on('typing', function(data) {
    outputStatus(data);
  });

  socket.on('stop typing', function(data) {
    $('#status li:contains(' + data.username + ')').remove();
  });

  //broadcast messages when someone disconnects
  socket.on('bye', function(data) {
    $('#messages').append($('<li class="notice">').text(getCurTime() + " " + data.username + ' left'));
  });


});