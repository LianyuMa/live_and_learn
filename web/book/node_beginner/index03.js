var server = require("./server06");
var router = require("./router02");
var requestHandlers = require("./requestHandlers01");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);