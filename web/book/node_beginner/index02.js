var server = require("./server04");
var router = require("./router");

server.start(router.route);