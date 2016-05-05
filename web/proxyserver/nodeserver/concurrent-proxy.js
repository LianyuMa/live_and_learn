const colors = require('colors');
const http = require('http');
const httpProxy = require('http-proxy');

var connections = [];
var go = false;

httpProxy.createServer({ target: 'http://localhost:9000' }).listen(8000);

http.createServer((req, res) => {
  connections.push(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`request successfully proxied to: ${req.url}\n
      ${JSON.stringify(req.headers, true, 2)}`);
    res.end();
  });

  process.stdout.write(`${connections.length}, `);

// make a server which only responds when there is a given nubmer on connections
  if (connections.length > 110 || go) {
    go = true;
    while (connections.length) {
      connections.shift()();
    }
  }
}).listen(9000);

console.log('http proxy server'.blue + ' started '.green.bold + 'on port '.blue + '8000'.yellow);
console.log('http.server '.blue + 'started '.green.bold + 'on port '.blue + '9000'.yellow);
