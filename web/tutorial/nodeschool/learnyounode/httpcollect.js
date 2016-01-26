var http = require('http');
var url = process.argv[2];
var content = '';

http.get(url, function(response) {
  response.setEncoding('utf8');
  response.on('error', function(err) {
    console.log(err);
  });
  response.on('data', function(data) {
    content += data;
  });
  response.on('end', function() {
    console.log(content.length);
    console.log(content);
  });
});