'use strict';

var dnode = require('dnode'),
    five  = require('johnny-five');

five.Board().on('ready', function() {
  var temprature, curTem, server;
  temprature = new five.Thermometer({
    controller: 'TMP36',
    pin       : 'A0'
  });

  temprature.on('data', function () {
    curTem = this.celsius;
  });

  server = dnode({
    getTemperature: function (cb) {
      cb(curTem);
    }
  });
  server.listen(1337);
});
