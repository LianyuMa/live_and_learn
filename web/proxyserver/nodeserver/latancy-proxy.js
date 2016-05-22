var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
http.createServer(function (req, res) {
  setTimeout(function () {
    proxy.web(req, res, { target: 'http://localhost:9000'});
  }, 500);
}).listen(8000);

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.write('request successfully proxied to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);

console.log('http proxy server started on port 8000 with latency');
console.log('http server started on port 9000 with latency');