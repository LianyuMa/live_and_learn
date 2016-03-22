'use strict';

var five  = require('johnny-five'),
    board = new five.Board()
    ;

board.on('ready', () => {
  var motor = new five.Motor(9);

  motor.on('start', () => {
    board.wait(2000, () => {
      motor.stop();
    });
  });

  motor.on('stop', () => {
    board.wait(1000, () => {
      motor.start(200);
    });
  });

  motor.start(200);
});
