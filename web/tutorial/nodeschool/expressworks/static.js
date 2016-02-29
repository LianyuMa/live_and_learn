var
  express = require('express'),
  app     = express(),
  path    = require('path'),
  portNum = process.argv[2],
  fp      = process.argv[3]
  ;

app.use(express.static(fp || path.join(__dirname, 'public')));

app.listen(portNum);