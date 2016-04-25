const _ = require('lodash');

module.exports = (list) => {
  const sortedList = _.sortBy(list, 'income');
  const average = _.reduce(sortedList, (sum, num) => sum + num.income, 0) / sortedList.length;
  const underperform = _.filter(sortedList, (num) => (num.income <= average));
  const overperform = _.filter(sortedList, (num) => (num.income > average));
  return { average, underperform, overperform };
};
