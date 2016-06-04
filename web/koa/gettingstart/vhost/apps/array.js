function* responseTime(next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  this.set('X-Response-Time', `${ms}ms`);
}

function* index(next) {
  yield next;
  if (this.url !== '/') return;
  this.body = 'Howzit? From bar middleware bundle';
}

module.exports = [responseTime, index];
