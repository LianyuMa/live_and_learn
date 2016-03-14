'use strict';

function alwaysThrows () {
  throw new Error('OH NOES');
}

function iterate (int) {
  console.log(int);
  return int + 1;
}

var p1 = new Promise(function(resolve, reject) {
  resolve(iterate(1));
});

p1.then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, console.log);
