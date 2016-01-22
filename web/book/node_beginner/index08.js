var server = require("./server08");
var router = require("./router08");
var requestHandlers = require("./requestHandlers08");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);