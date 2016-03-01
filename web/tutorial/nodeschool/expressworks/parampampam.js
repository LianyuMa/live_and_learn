'use strict';

var
  express = require('express'),
  app     = express(),
  portNum = process.argv[2],
  crypto  = require('crypto')
  ;

app.put('/message/:id', function (req, res) {
  var id = req.params.id;
  res.send(crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex'));
});

app.listen(portNum);