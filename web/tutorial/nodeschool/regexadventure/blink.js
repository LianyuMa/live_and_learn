const marked = require('marked');
// non-greedy match
module.exports = (str) => marked(str).replace(/@@(.+?)@@/g, '<blink>$1</blink>');
