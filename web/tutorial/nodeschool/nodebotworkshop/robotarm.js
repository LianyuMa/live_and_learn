'use strict';

var five  = require('johnny-five'),
    board = new five.Board()
    ;

board.on('ready', () => {
  var potentiometer = new five.Sensor('A2'),
      servo         = new five.Servo({
        pin  : 9,
        range: [0, 179]
      });

  potentiometer.on('change', function() {
    var position = five.Fn.map(this.value, 0, 1023, 0, 179);
    servo.to(position);
  });
});
