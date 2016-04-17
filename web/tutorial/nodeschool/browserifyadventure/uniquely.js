const uniq = require('uniq');

function uniquely(arg) {
  return uniq(arg.split(','));
}

module.exports = uniquely;
