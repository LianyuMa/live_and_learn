const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbName = process.argv[2];
const collName = process.argv[3];
const _id = process.argv[4];
const url = `mongodb://localhost:27017/${dbName}`;

MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  const collection = db.collection(collName);
  collection.remove({ _id }, (err) => {
    assert.equal(null, err);
    db.close();
  });
});
