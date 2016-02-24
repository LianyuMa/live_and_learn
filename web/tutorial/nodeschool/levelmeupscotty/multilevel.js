var multilevel = require('multilevel');
var net = require('net');

var db = multilevel.client();
var connection = net.connect(4545);
connection.pipe(db.createRpcStream()).pipe(connection);

db.get('multilevelmeup', function (err, value) {
  if (err) {return console.log(err);}
  console.log(value);
  //You must close the connection after you have fetched the value!
  connection.end();
});