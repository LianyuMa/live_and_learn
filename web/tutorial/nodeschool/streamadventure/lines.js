var through = require('through');
// var through2 = require('through2');
var split = require('require');
var tr = through(write, end);

function write(data) {
  var writtenData = data.toString();
  this.queue(writtenData);
}

function end () {
  this.queue(null);
}

process.stdin.pipe(split()).pipe(tr);

process.stdin.pipe(split()).pipe(through2(function (line, _, next) {
  console.dir(line.toString());
  next();
}));