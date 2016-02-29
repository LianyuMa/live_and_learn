'use strict';

var
  express = require('express'),
  app     = express(),
  path    = require('path'),
  portNum = process.argv[2],
  fp      = process.argv[3]
  ;

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');
app.get('/home', function (req, res) {
  res.render('index', { date: new Date().toDateString() });
});

app.listen(portNum);