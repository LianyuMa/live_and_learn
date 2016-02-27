'use strict';

var level = require('level'),
    sub = require('level-sublevel'),
    db = sub(level(process.argv[2])),
    robots = db.sublevel('robots'),
    dinosaurs = db.sublevel('dinosaurs')
    ;

dinosaurs.put('slogan', 'rawr', function (err) {
  if (err) {return console.error(err);}
  console.error('put slogan = rawr');
});

robots.put('slogan', 'beep boop', function (err) {
  if (err) {return console.error(err);}
  console.error('put slogan = beep boop');
});