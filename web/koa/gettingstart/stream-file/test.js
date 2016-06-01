const app = require('./app');
const request = require('supertest').agent(app.listen());

describe('Stream File', () => {
  it('GET /app.js', (done) => {
    request
      .get('/app.js')
      .expect('content-type', /application\/javascript/)
      .expect(200, done);
  });

  it('GET /test.js', (done) => {
    request
      .get('/test.js')
      .expect('content-type', /application\/javascript/)
      .expect(200, done);
  });

  it('GET /nonexist.js', (done) => {
    request
      .get('/nonexist.js')
      .expect(404, done);
  });

  it('GET /', (done) => {
    request
      .get('/')
      .expect(404, done);
  });
});
