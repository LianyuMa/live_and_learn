const koa = require('koa');
const JSONStream = require('streaming-json-stringify');
const app = module.exports = koa();

app.use(function* writeStream() {
  this.type = 'json';
  const stream = this.body = JSONStream();

  stream.on('error', this.onerror);

  setImmediate(() => {
    stream.write({
      id: 1,
    });

    setImmediate(() => {
      stream.write({
        id: 2,
      });

      setImmediate(() => {
        stream.end();
      });
    });
  });
});

if (!module.parent) app.listen(3000);
