'use strict';

var promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    fulfill('FULFILLED!');
  }, 300);
});

// promise.then(function(promise) {
//   console.log(promise);
// });

promise.then(console.log);