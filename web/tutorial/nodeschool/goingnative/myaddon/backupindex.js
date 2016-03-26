'use strict';

// var bindings = require('bindings'),
//     myaddon  = bindings('myaddon')
//     ;

var myaddon = require('bindings')('myaddon');

// myaddon.print(process.argv[2]);
// console.log(addon.length(process.argv[2]));
myaddon.delay(process.argv[2], () => {
  console.log('Done!');
});