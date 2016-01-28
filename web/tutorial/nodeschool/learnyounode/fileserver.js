var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });
  var content = fs.createReadStream(process.argv[3]);
  content.pipe(res);
}).listen(process.argv[2]);