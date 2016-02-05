var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();

var ws = tr.select('.loud').createStream();
ws.pipe(through(function write(data) {
  this.queue(data.toString().toUpperCase());
}, function end () {
  this.queue(null);
})).pipe(ws);

process.stdin.pipe(tr).pipe(process.stdout);