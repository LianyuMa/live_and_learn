var total = 0;
var longDelay = (a) => {
  if (a === undefined) {
    const result = total;
    total = null;
    return result;
  }
  total += a;
  return longDelay;
};

module.exports = longDelay;
