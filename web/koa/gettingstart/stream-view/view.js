const Readable = require('stream').Readable;
const inherits = require('util').inherits;
const co = require('co');

module.exports = View;

inherits(View, Readable);

function View(context) {
  Readable.call(this, {});

  co.call(this, this.render).catch(context.onerror);
}

View.prototype._read = () => {};

View.prototype.render = function* renderHTML() {
  this.push('<!DOCTYPE html><html><head><title>Hello World</title></head>');

  const body = yield (done) => {
    setImmediate(() => {
      done(null, '<p>Hello World</p>');
    });
  };
  this.push(`<body>${body}</body>`);

  this.push('</html>');
  this.push(null);
};
