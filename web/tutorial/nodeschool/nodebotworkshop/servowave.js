'use strict';

var five  = require('johnny-five'),
    board = new five.Board()
    ;

// function reset () {
//   servo.stop();
//   servo.center();
// }

board.on('ready', () => {
  var servo = new five.Servo(9);
  servo.sweep([0, 180]);
  board.wait(3000, () => {
    servo.stop();
    servo.center();
  });
});
