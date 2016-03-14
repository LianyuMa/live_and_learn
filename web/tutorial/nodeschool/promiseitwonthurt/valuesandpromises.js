'use strict';

function attachTitle (v) {
  return 'DR. ' + v;
}

var p1 = Promise.resolve('MANHATTAN');

p1.then(attachTitle).then(console.log);
