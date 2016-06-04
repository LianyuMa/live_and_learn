const app = require('./app');
const request = require('supertest').agent(app.listen());

describe('Virtual Host', () => {
  describe('www.subdomain koa app', () => {
    describe('when GET /', () => {
      it('should say "Hello from www app"', (done) => {
        request
          .get('/')
          .set('Host', 'www.example.com')
          .expect(200)
          .expect('Hello from www app', done);
      });

      it('should set X-Custom', (done) => {
        request
          .get('/')
          .set('Host', 'www.example.com')
          .expect('X-Custom', 'Dub Dub Dub App')
          .expect(200, done);
      });
    });

    describe('when GET / without subdomain', () => {
      it('should say "Hello from www app"', (done) => {
        request
          .get('/')
          .set('Host', 'example.com')
          .expect(200)
          .expect('Hello from www app', done);
      });

      it('should set X-Custom', (done) => {
        request
          .get('/')
          .set('Host', 'example.com')
          .expect('X-Custom', 'Dub Dub Dub App')
          .expect(200, done);
      });
    });

    describe('when not GET /', () => {
      it('should 404', (done) => {
        request
          .get('/nonexsit')
          .set('Host', 'example.com')
          .expect(404, done);
      });
    });
  });

  describe('bar subdomain array bundle', () => {
    describe('when GET /', () => {
      it('should say "Howzit? From bar middleware bundle"', (done) => {
        request
          .get('/')
          .set('Host', 'bar.example.com')
          .expect(200)
          .expect('Howzit? From bar middleware bundle', done);
      });

      it('should set X-Response-Time', (done) => {
        request
          .get('/')
          .set('Host', 'bar.example.com')
          .expect('X-Response-Time', /ms$/)
          .expect(200, done);
      });
    });

    describe('when not GET /', () => {
      it('should 404', (done) => {
        request
          .get('/nonexsit')
          .set('Host', 'bar.example.com')
          .expect(404, done);
      });
    });
  });

  describe('default vhost', () => {
    describe('when GET /', () => {
      it('should 404', (done) => {
        request
          .get('/')
          .set('Host', '127.0.0.1')
          .expect(404, done);
      });
    });
  });
});
