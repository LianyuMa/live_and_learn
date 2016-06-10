const koala = require('koala');
const app = koala();

app.use(function* noContent(argument) {
  this.response.status = 204;
});

const fn = app.callback();

require('http').createServer(fn).listen((err) => {
  if (err) throw err;
  console.log('koala app listening on port %s', this.address().port);
});
