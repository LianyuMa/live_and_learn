'use strict';

var
  express    = require('express'),
  app        = express(),
  portNumber = process.argv[2]
  ;

app.get('/home', function (req, res) {
  res.end('Hello World!');
});

app.listen(portNumber);