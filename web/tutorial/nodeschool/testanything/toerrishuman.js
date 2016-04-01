const test = require('tape');
const feedCat = require(process.argv[2]);
test('feedCat', (t) => {
  t.plan(2);
  t.equal(feedCat('fish'), 'yum');
  t.throws(feedCat.bind(null, 'chocolate'));
});
