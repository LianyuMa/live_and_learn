const through = require('through2');
const split = require('split');
const sprintf = require('sprintf');
const quote = require('quote-stream');
const combine = require('stream-combiner2');

function transform(file) {
  if (!/\.txt$/.test(file)) return through();
  const num = 0;
  var liner = through((buf, enc, next) => {
    var line = buf.toString('utf8') + '\n';
    if (num % 5 === 0) {
      console.log(this);
      this.push(sprintf('%3d %s', num, line));
    } else {
      this.push(`    ${line}`);
    }
    num++;
    next();
  });
  const prefix = through();
  prefix.push('module.exports=');
  return combine([ split(), liner, quote(), prefix ]);
}

module.exports = transform;
