'use strict';

var http = require('http'),
    async = require('async'),
    URLOne = process.argv[2],
    URLTwo = process.argv[3]
    ;

async.each([URLOne, URLTwo], (url, done) => {
  var body = '';
  http.get(url, (res) => {
    res.on('data', (chunk) => {
    });
    res.on('end', () => {
      return done();
    });
  }).on('error', (err) => {
      console.log(err);
    });
}, (err) => {
  if (err) {console.log(err);}
});