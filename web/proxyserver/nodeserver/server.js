const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

http.createServer((req, res) => {
  setTimeout(() => {
    proxy.web(req, res, { target: 'http://localhost:9008' });
  }, 5000);
}).listen(8008);

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(`request successfully proxied to: ${req.url}\n${JSON.stringify(req.headers, true, 2)}`);
  res.end();
}).listen(9008);
