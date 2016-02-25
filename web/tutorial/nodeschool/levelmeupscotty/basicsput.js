'use strict';

var level     = require('level'),
    db        = level(process.argv[2]),
    obj       = JSON.parse(process.argv[3]),
    key
    ;

function callback (err) {
  if (err) {return console.error('Error in put():', err);}
  return console.error('put foo = bar');
}

for (key in obj) {
  if (obj.hasOwnProperty(key)) {
    db.put(key, obj[key], callback ());
  }  
}

db.close();