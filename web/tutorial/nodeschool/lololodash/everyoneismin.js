const _ = require('lodash');

module.exports = (list) => {
  const result = {
    hot: [],
    warm: [],
  };

  function checkTemp(temp) {
    return temp > 19;
  }

  _.forEach(list, (town, townname) => {
    if (_.every(town, checkTemp)) result.hot.push(townname);
    else if (_.some(town, checkTemp)) result.warm.push(townname);
  });

  return result;
};
