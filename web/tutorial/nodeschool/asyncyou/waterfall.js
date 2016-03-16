'use strict';

var http  = require('http'),
    async = require('async'),
    fs    = require('fs'),
    fp    = process.argv[2];

async.waterfall([
  function(cb) {
    fs.readFile(fp, 'utf-8', (err, data) => {
      if (err) {return cb(err);}
      cb(null, data);
    });
  }, function(contents, cb) {
    var body = '';
    http.get(contents, (res) => {
      res.on('data', (chunk) => {
        body += chunk.toString();
      });
      res.on('end', function() {
        cb(null, body);
      });
    }).on('error', (e) => {
      cb(e);
    });
  }
], function (err, result) {
  if (err) {return console.error(err);}
  console.log(result);
});
