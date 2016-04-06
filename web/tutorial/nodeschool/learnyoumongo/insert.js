const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/learnyoumongo';
const firstName = process.argv[2];
const lastName = process.argv[3];
const doc = { firstName, lastName };

MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  const collection = db.collection('docs');
  collection.insert(doc, (err) => {
    assert.equal(null, err);
    console.log(JSON.stringify(doc));
    db.close();
  });
});
