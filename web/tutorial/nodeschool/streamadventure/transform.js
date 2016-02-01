var through = require('through');
var tr = through(write, end);

function write(data) {
  var writtenData = data.toString().toUpperCase();
  this.queue(writtenData);
}

function end () {
  this.queue(null);
}

process.stdin.pipe(tr).pipe(process.stdout);