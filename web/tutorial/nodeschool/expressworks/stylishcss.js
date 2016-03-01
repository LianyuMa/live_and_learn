var
  express = require('express'),
  app     = express(),
  path    = require('path'),
  stylus  = require('stylus'),
  portNum = process.argv[2],
  fp      = process.argv[3]
  ;

app.use(stylus.middleware(fp));
app.use(express.static(fp));

app.listen(portNum);