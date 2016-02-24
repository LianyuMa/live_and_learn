var level = require('level');
var sub = require('level-sublevel');
var db = sub(level(process.argv[2]));
var robots = db.sublevel('robots');
var dinosaurs = db.sublevel('dinosaurs');

dinosaurs.put('slogan', 'rawr', function (err) {
  if (err) {return console.error(err);}
  console.error('put slogan = rawr');
});

robots.put('slogan', 'beep boop', function (err) {
  if (err) {return console.error(err);}
  console.error('put slogan = beep boop');
});