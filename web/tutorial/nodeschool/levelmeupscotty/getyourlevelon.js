"use strict";

var level = require('level');
var db = level(process.argv[2]);

db.get(process.argv[3], function (err, value) {
  if (err) {return console.log('Ooops!', err);}

  console.log(value);
});