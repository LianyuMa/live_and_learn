const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const getAge = process.argv[2];
const url = 'mongodb://localhost:27017/learnyoumongo';

MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  const parrots = db.collection('parrots');
  parrots.count({
    age: {
      $gt: +getAge,
    },
  }, (err, count) => {
    assert.equal(null, err);
    console.log(count);
    db.close();
  });
});
