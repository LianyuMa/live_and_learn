var level = require('level');
var db = level(process.argv[2]);

for (var i = 0; i < 101; i++) {
  var a = i;
  (function(a){
    db.get('key' + a, function (err, value) {
      if (err) {
        if (err.notFound) {
          return;
        }
        return err;
      }

      console.log('key' + a + '=' + value);
    });
  })(a); 
};