const _ = require('lodash');

module.exports = (list) => {
  const results = [];
  function reduce(result, value, key) {
    result += value.quantity;
    return result;
  }
  const groupedList = _.groupBy(list, 'article');
  _.forEach(groupedList, (value, key) => results.push({
    article: parseInt(key, 10),
    total_orders: _.reduce(value, reduce, 0),
  }));
  return _.sortBy(results, 'total_orders').reverse();
};
