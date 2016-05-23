var httpProxy = require('http-proxy');
var Agent = require('agentkeepalive');

var agent =  new Agent({
  maxSockets: 100,
  keepAlive: true,
  maxFreeSockets: 10,
  keepAliveMsecs:1000,
  timeout: 60000,
  keepAliveTimeout: 30000 // free socket keepalive for 30 seconds
});

var proxy = httpProxy.createProxy({ target: 'http://yahoo.com', agent: agent });

//
// Modify headers of the request before it gets sent
// So that we handle the NLTM authentication request
//
proxy.on('proxyRes', function (proxyRes) {
  var key = 'www-authenticate';
  proxyRes.headers[key] = 'aaa';
  console.log(JSON.stringify(proxyRes.headers[key]));
});

require('http').createServer(function (req, res) {
  proxy.web(req, res);
}).listen(3000);
