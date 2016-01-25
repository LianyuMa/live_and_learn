var readdirfilter = require('./readdirfilter.js');
readdirfilter(process.argv[2], process.argv[3], function(err, list) {
  if (err) {
    return console.error(err);
  } else {
    list.forEach(function(filename){
      console.log(filename);
    });
  }
});