'use strict';

var HTTP = require('q-io/http');

HTTP.read('http://localhost:1337').then(function(data) {
  console.log(JSON.parse(data));
}).then(null, console.error).done();