var page = require('webpage').create();
page.open('http://github.com/', function () {
  page.render('github.png'); //Beside PNG format, PhantomJS supports JPEG, GIF, and PDF
  phantom.exit();
});
