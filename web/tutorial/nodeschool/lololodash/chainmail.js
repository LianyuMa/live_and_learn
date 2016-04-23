const _ = require('lodash');

module.exports = (ws) => _.chain(ws).sort().map((word) => `${word.toUpperCase()}CHAINED`).value();
