const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const getAge = process.argv[2];
const url = 'mongodb://localhost:27017/learnyoumongo';

MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  const parrots = db.collection('parrots');
  parrots.find({
    age: {
      $gt: +getAge,
    },
  }, {
    name: 1,
    age: 1,
    _id: 0,
  }).toArray((err, docs) => {
    assert.equal(err, null);
    console.log(docs);
    db.close();
  });
});
