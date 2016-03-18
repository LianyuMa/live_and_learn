'use strict';

var async = require('async'),
    http  = require('http')
    ;
async.series([
  function (done) {
    async.times(5, (n, next) => {
      var req = http.request({
        hostname: process.argv[2],
        port    : process.argv[3],
        path    : '/users/create',
        method  : 'POST',
      }, (res) => {
        res.on('data', (chunk) => {});
        res.on('end', () => {next(null)});
      }).on('errpr', (err) => {
        return console.error(err);
      });

      var data = JSON.stringify({ user_id : n + 1 });
      req.write(data);
      req.end();
    }, (err) => {
      if(err) {return console.error(err)};
    
      done(null);
    });
  },
  function getInfo (done) {
    http.get('http://' + process.argv.slice(2).join(':') + '/users', (res) => {
      var body = '';
      res.on('data', (chunk) => {
        body += chunk.toString();
      });
      res.on('end', () => {
        done(null, body);
      });
    }).on('error', (err) => {
      console.log(err);
    });
  }],

  (err, result) => {
  if (err) {return console.err(err)}
  console.log(result[1]);
  });
