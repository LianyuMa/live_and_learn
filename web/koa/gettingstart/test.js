const app = require('./app');
const request = require('supertest').agent(app.listen());

describe('Hello world!', () => {
  it('should say "Hello world!"', (done) => {
    request
    .get('/')
    .expect(200)
    .expect('Hello world!', done);
  });
});
