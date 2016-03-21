'use strict';

var async         = require('async'),
    http          = require('http'),
    url           = process.argv[2],
    responseInfo  = '',
    NumOfRequests = 0
    ;

async.whilst(() => {return !/meerkat/.test(responseInfo.trim());}, (callback) => {
  var body = '';
  http.get(url, (res) => {
    ++NumOfRequests;
    res.on('data', (chunk) => {
      body += chunk.toString();
    });
    res.on('end', () => {
      responseInfo = body;
      callback(null, NumOfRequests);
    });
  }).on('error', (err) => {
    return console.error(err);
  });
  }, (err, n) => {
    if (err) {return console.error(err);}
    console.log(n);
  }
);
