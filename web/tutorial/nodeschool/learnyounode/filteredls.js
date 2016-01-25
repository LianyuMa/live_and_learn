var fs = require('fs');
var path = require('path');
var pathname = process.argv[2];
var end = "." + process.argv[3];
var result = '';

fs.readdir(pathname, function(err, list) {
  if (err) {
    console.error(err);
  } else {
    for (var i = 0; i < list.length; i++) {
      if (path.extname(list[i]) == end) {
        result += (list[i] + '\n');
      } else{}
    }
    console.log(result);
  }
});