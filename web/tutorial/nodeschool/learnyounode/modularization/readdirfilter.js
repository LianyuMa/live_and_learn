var fs = require('fs');
var path = require('path');

function foo(pathname, end, callback) {
  fs.readdir(pathname, function (err, list) {
    if (err) {
      return callback(err)
    } else{
      list = list.filter(function(filterfilename) {
        return (path.extname(filterfilename) === ("." + end));
      });
    }

    callback(null, list);
  });
}

module.exports = foo;