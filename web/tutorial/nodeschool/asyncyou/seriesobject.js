'use strict';

var async  = require('async'),
    http   = require('http'),
    URLOne = process.argv[2],
    URLTwo = process.argv[3]
    ;

function fetchURL (url, done) {
  var body = '';
  http.get(url, (res) => {
    res.on('data', (chunk) => {
      body += chunk.toString();
    });
    res.on('end', function() {
      done(null, body);
    });
  }).on('error', (e) => {
    done(e);
  });
}

async.series({
  requestOne: function(done) {
    fetchURL(URLOne, done);
  },
  requestTwo: function(done) {
    fetchURL(URLTwo, done);
  }
}, function(err, results) {
  console.log(results);
});
