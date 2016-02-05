var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');

module.exports = function () {
    var result;
    var lineJson;

    var tr = through(function (line) {
        if (line.length === 0) return;

        lineJson = JSON.parse(line)

        if (lineJson.type === 'genre') {
            if (result)
                this.queue(JSON.stringify(result) + '\n');

            result = {'name': lineJson.name, 'books': []};
        } else if (lineJson.type === 'book') {
            result.books.push(lineJson.name);
        } else {
            console.warn('Unknown type.');
        }
    }, function () {
        if (result)
            this.queue(JSON.stringify(result) + '\n');
        this.queue(null);
    });

    return combine(
        // read newline-separated json,
        // group books into genres,
        // then gzip the output
        split(),
        tr,
        zlib.createGzip()
    )
}