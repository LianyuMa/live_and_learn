'use strict';

var
  express = require('express'),
  app     = express(),
  portNum = process.argv[2]
  ;

app.get('/search', function (req, res) {
  res.send(req.query);
});

app.listen(portNum);