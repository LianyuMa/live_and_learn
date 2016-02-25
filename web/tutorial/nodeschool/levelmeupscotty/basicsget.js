"use strict";
// JSLint: Don't make functions within a loop
// var 
//     i, a,
//     level = require('level'),
//     db    = level(process.argv[2])
//     ;

// for (i = 0; i < 101; i++) {
//   a = i;
//   (function(a){
//     db.get('key' + a, function (err, value) {
//       if (err) {
//         if (err.notFound) {
//           return;
//         }
//         return err;
//       }

//       console.log('key' + a + '=' + value);
//     });
//   }(a)); 
// }

var level = require('level'),
    db    = level(process.argv[2]);

function fetchNext (i) {
  var key = 'key' + i;
  db.get(key, function (err, data) {
    if (err) {
      if (!err.notFound) {
        throw err;
      }
    } else {
      console.log(key + '=' + data);
    }

    if (i < 100) {
      fetchNext(i + 1);
    }
  });
}

fetchNext(0);