const http = require('http');
const httpProxy = require('http-proxy');

httpProxy.createServer({
  target: {
    port: 9000,
    host: 'localhost',
  },
  forward: {
    port: 9001,
    host: 'localhost',
  },
}).listen(8000);

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.write(`request successfully proxied to: ${req.url}\n${JSON.stringify(req.headers, true, 2)}`);
  res.end();
}).listen(9000);

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.write(`request successfully forwarded to: ${req.url}\n
    ${JSON.stringify(req.headers, true, 2)}`);
  res.end();
}).listen(9001);

console.log('http proxy server started on port 8000 with forward proxy');
console.log('http server started on port 9000');
console.log('http forward server started on port 9001');
