var through = require('through');
var split = require('split');
var tr = through(write, end);
var count = 1;

function write(data) {
  
  if (count % 2 == 1) {
    var writtenData = data.toString().toLowerCase();
  } else{
    var writtenData = data.toString().toUpperCase();
  }
  this.queue(writtenData + '\n');
  count++;
}

function end () {
  this.queue(null);
}

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);