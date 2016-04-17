const ndjson = require('./ndjson');

console.log(ndjson.parse(prompt('Input a string to parse.')));
console.log(ndjson.stringify(prompt('Input an array to stringify.')));
