'use strict';

var five = require('johnny-five');

five.Board().on('ready', function () {
  var piezo         = new five.Piezo(9),
      led           = new five.Led(13),
      button        = new five.Button(5),
      threshold     = 50,
      isReset       = false,
      isOnFire      = false,
      sirenInterval = null,
      temprature, curTem;

  temprature = new five.Thermometer({
    controller: 'TMP36',
    pin       : 'A0'
  });

  function soundAlarm () {
    if (isOnFire) {return;} 
    isOnFire = true;
    led.strobe(1000);
    piezo.tone(five.Piezo.Notes.c4, 750);
    sirenInterval = setInterval(function() {
      piezo.tone(five.Piezo.Notes.c4, 750);
    }, 1000);
  }

  function calm () {
    if(!isOnFire) {return;} 
    isOnFire = false;
    led.stop().off();
    clearInterval(sirenInterval);
    piezo.noTone();
  }

  temprature.on('data', function () {
    curTem = this.celsius;
    if (curTem > threshold) {
      if (!isReset) {soundAlarm();}
    } else {
      calm();
      isReset = false;
    }
  });

  button.on('press', function () {
    if (!isOnFire) {return;}
    isReset = true;
    calm();
  })
});
