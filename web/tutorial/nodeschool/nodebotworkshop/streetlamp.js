'use strict';

var five  = require('johnny-five'),
    board = new five.Board()
    ;

board.on('ready', () => {
  var photoresistor = new five.Sensor('A0'),
      led           = new five.Led(9);
  
  photoresistor.on('change', function() {
    if (this.value > 600) {
      led.on();
    } else {
      led.off();
    }
  });      
});
