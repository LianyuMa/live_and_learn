const app = require('./app');
const request = require('supertest').agent(app.listen());

describe('negotiation', () => {
  describe('json', () => {
    it('should respond with json', (done) => {
      request
        .get('/cyclops')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect({ name: 'cyclops', formerly: 'Scott Summers' }, done);
    });
  });

  describe('xml', () => {
    it('should respond with xml', (done) => {
      request
        .get('/cyclops')
        .set('Accept', 'application/xml')
        .expect(200)
        .expect('Content-Type', /xml/)
        .expect('<name>cyclops</name>', done);
    });
  });
});
