'use strict';

var async = require('async'),
    http  = require('http'),
    url   = process.argv[2]
    ;

async.reduce(['one', 'two', 'three'], 0, (memo, item, callback) => {
  http.get(url + '?number=' + item, (res) => {
    var body = '';
    res.on('data', (chunk) => {
      body += chunk.toString();
    });
    res.on('end', () => {
      callback(null, memo + parseInt(body, 10));
    });
  }).on('error', (err) => {
    return console.error(err);
  });
}, (err, result) => {
  if (err) {return console.error(err);}
  console.log(result);
});
