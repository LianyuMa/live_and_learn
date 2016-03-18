'use strict';

var http = require('http'),
    async = require('async'),
    URLOne = process.argv[2],
    URLTwo = process.argv[3]
    ;

async.map([URLOne, URLTwo], (url, done) => {
  var body = '';
  http.get(url, (res) => {
    res.on('data', (chunk) => {
      body += chunk.toString();
    });
    res.on('end', () => {
      return done(null, body);
    });
  }).on('error', (err) => {
      console.log(err);
    });
}, (err, results) => {
  if (err) {return console.log(err);}
  console.log(results);
});