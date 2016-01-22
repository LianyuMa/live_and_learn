var server = require("./server07");
var router = require("./router07");
var requestHandlers = require("./requestHandlers07");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);