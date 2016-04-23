const _ = require('lodash');
const sortByQuantity = (collection) => _.sortBy(collection, (item) => -item.quantity);

module.exports = sortByQuantity;
