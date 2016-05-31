const app = require('./app');
const request = require('supertest').agent(app.listen());

var token;
var cookie;

describe('csrf', () => {
  describe('GET /token', () => {
    it('should get token', (done) => {
      request
        .get('/token')
        .expect(200)
        .end((err, res) => {
          token = res.text;
          token.should.be.String;
          cookie = res.headers['set-cookie'].join(';');
          done(err);
        });
    });
  });
});
