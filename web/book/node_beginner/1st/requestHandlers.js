var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called.");
	// var content = "empty";

	exec("find /", function (error, stdout, stderr) {
		// content = stdout;
		response.writeHead(200, {"content-Type": "Text/plain"});
		response.write(stdout);
		response.end();
	});

	// return content;

	// function sleep(milliSeconds) {
	// 	var startTime = new Date().getTime();
	// 	while (new Date().getTime() < startTime + milliSeconds);
	// }

	// sleep(10000);
	// return "Hello Start";
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	// return "Hello upload";
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;