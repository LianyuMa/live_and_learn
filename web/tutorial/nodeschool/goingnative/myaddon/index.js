'use strict';

// var bindings = require('bindings'),
//     myaddon  = bindings('myaddon')
//     ;

var addon = require('bindings')('myaddon');

// myaddon.print(process.argv[2]);
console.log(addon.length(process.argv[2]));
