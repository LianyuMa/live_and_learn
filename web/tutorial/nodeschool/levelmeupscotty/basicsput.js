var level = require('level');
var db = level(process.argv[2]);
var obj = JSON.parse(process.argv[3]);

var propNames = Object.getOwnPropertyNames(obj);

for (var key in obj) {
  db.put(key, obj[key], function (err) {
    if (err) return console.error('Error in put():', err);
    console.error('put foo = bar');
  });
}

db.close();