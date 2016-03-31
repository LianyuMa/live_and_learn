module.exports = function makeCounter(someObj, maxNum) {
  var count = 0;
  var done = false;
  someObj.next = () => {
    if (count < (maxNum || 10)) {
      count++;
    } else {
      done = true;
    }

    return {
      value: count,
      done : done,
    };
  };
};
