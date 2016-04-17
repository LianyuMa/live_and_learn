const uniq = require('uniq');
const result = prompt('Input an array separated with comma.').split(',');
uniq(result);

console.log(result);
