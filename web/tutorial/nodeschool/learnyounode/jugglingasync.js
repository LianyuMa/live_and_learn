var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var content1 = '';
var content2 = '';
var content3 = '';

http.get(url1, function (response) {
  response.setEncoding('utf8');
  response.on('error', function (err) {
    console.error(err);
  });
  response.on('data', function (data) {
    content1 += data;
  });
  response.on('end', function () {
    http.get(url2, function (response) {
      response.setEncoding('utf8');
      response.on('error', function (err) {
        console.error(err);
      });
      response.on('data', function (data) {
        content2 += data;
      });
      response.on('end', function () {
        http.get(url3, function (response) {
          response.setEncoding('utf8');
          response.on('error', function (err) {
            console.log(err);
          });
          response.on('data', function (data) {
            content3 += data;
          });
          response.on('end', function () {
            console.log(content1);
            console.log(content2);
            console.log(content3);
          });
        });
      });
    });
  });
});