const app = require('./app');
const request = require('supertest').agent(app.listen());

describe('Templates', () => {
  describe('GET /', () => {
    it('should respond with a rendered view', (done) => {
      request
        .get('/')
        .expect(200)
        .expect('<p>Alex is a web developer.</p>', done);
    });
  })
});
