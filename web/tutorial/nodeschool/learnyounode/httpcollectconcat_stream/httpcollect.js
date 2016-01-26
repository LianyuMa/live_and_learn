var http = require('http');
var concat = require('concat-stream');
var url = process.argv[2];

http.get(url, function (response) {
  response.pipe(concat({encoding: 'string'}, function (data) {
      console.log(data.length);
      console.log(data);
    }));
});