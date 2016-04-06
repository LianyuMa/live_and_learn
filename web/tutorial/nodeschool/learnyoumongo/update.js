const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbname = process.argv[2];
const url = `mongodb://localhost:27017/${dbname}`;

MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  const users = db.collection('users');
  users.update({
    username: 'tinatime',
  }, {
    $set: {
      age: 40,
    },
  }, (err) => {
    assert.equal(err, null);
    db.close();
  });
});
