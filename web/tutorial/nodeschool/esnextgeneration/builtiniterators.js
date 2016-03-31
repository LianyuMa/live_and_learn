module.exports = function filterForNumbers(iterable) {
  var array = [];
  var value;
  for (value of iterable) {
    if (typeof value === 'number') {
      array.push(value);
    }
  }
  return array;
};
