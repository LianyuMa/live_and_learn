var http = require('http');
var map = require('through2-map');

http.createServer(function (req, res) {
  if (req.method == 'POST') {
        req.pipe(map(function (chunk) {
          return chunk.toString().toUpperCase();
        })).pipe(res);
  } else{
    return res.end('Only POST accepted');
  }
}).listen(process.argv[2]);