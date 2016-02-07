function doubleAll (number) {
  var result = number.map(function (num) {
    return num * 2;
  });
  return result;
}

module.exports = doubleAll;