'use strict';

var
  express    = require('express'),
  app        = express(),
  bodyparser = require('body-parser'),
  portNum    = process.argv[2]
  ;

app.use(bodyparser.urlencoded({ extended: false }));
app.post('/form', function (req, res) {
  res.send(req.body.str.split('').reverse().join(''));
});

app.listen(portNum);