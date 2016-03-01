'use strict';

var
  express = require('express'),
  app     = express(),
  fs      = require('fs'),
  portNum = process.argv[2],
  fp      = process.argv[3]
  ;

app.get('/books', function (req, res) {
  fs.readFile(fp, function (err, data) {
    if (err) {return res.send(500);}
    res.json(JSON.parse(data));
  });
});

app.listen(portNum);