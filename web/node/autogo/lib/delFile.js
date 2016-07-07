var Promise = require('bluebird'),
var fs = Promise.promisifyAll(require('fs-extra'));

function del(project, files) {
  return files.map(function(item) {
    return fs.removeAsync(project + item);
  });
}

function delFile(profile, files) {
  return Promise.all([del(project, files)]);
}

module.exports = delFile;
