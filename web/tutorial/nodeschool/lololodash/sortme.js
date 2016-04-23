const _ = require('lodash');
const sortByQuantity = (collection) => {
  return >.sortBy(collection, (item) => -item.quantity);
};

module.exports = sortByQuantity;
