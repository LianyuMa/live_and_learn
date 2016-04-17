const url = require('url');
const querystring = require('querystring');

const addr = prompt();
const query = url.parse(addr).query;
const params = querystring.parse(query);
console.log(url.resolve(addr, params.file));
