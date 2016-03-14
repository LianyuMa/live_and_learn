'use strict';

function all (p1, p2) {
  var counter = 0;
  var arr = [];

  var internalPromise = new Promise(function(resolve, reject) {
    p1.then(function(value) {
      arr[0] = value;
      counter++;

      if (counter == 2) {
        resolve(arr);
      }
    });

    p2.then(function(value) {
      arr[1] = value;
      counter++;

      if (counter == 2) {
        resolve(arr);
      }
    });
  });

  return internalPromise;
}

all(getPromise1(), getPromise2()).then(console.log);