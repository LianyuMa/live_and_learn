'use strict';

var five   = require('johnny-five'),
    board  = new five.Board(),
    dgram  = require('dgram'),
    server = dgram.createSocket('udp4');
    ;

board.on('ready', () => {
  var piezo = new five.Piezo(8);
  server.on('error', (err) => {
    console.log('Sever error:\n${err.stack}');
    server.close();
  });

  server.on('message', () => {
    piezo.play({
      song : "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
      beats: 1 / 4,
      tempo: 100
    });
  });

  server.on('listening', () => {
  });

  server.bind(1337);
});
