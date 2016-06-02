const app = require('./app');
const request = require('supertest').agent(app.listen());

describe('Stream View', () => {
  it('GET /', (done) => {
    request
      .get('/')
      .expect(200, (err, res) => {
        if (err) return done(err);

        res.should.be.html;
        res.text.should.match(/<title>Hello World<\/title>/);
        res.text.should.match(/<p>Hello World<\/p>/);
        done();
      });
  });
});
