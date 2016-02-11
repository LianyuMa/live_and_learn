function countWords(inputWords) {
  return inputWords.reduce(function (counter, curr) {
    counter[curr] = ++counter[curr] || 1;
    return counter;
  }, {});//initialValue: Value to use as the first argument to the first call of the callback---> counter = {}
}

module.exports = countWords;