var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs-extra'));
var del = require('../lib/delFile');

var files = ['/views/layouts/layout.jade', '/views/index.jade'];
function jadeWithout(project) {
  return Promise.all([del(project, files)])
    .then(function() {
      return console.log('remove jade success');
    });
}

module.exports = jadeWithout;
