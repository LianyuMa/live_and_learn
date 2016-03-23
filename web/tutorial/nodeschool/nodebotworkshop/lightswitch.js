'use strict';

var five  = require('johnny-five'),
    board = new five.Board()
    ;

board.on('ready', () => {
  var button = new five.Button(5),
      led    = new five.Led(9)
      ;

  button.on('press', () => {
    led.toggle();
  });
});
