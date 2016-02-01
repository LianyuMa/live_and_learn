var http = require('http');
var fs = require('fs');
var through = require('through');

var server = http.createServer(function (req, res) {
  if (req.method == 'POST') {
    req.pipe(through(function write (data) {
      this.queue(data.toString().toUpperCase());
    }, function end () {
      this.queue(null);
    })).pipe(res);
  } else{
    res.end('ONLY POST ACCEPTED');
  }
});
server.listen(Number(process.argv[2]));