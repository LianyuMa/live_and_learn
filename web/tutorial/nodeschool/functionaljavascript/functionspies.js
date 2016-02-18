function Spy(target, method) {
  var result = {count: 0};
  var oldFunction = target[method];

  target[method] = function() {
    result.count++;
    return oldFunction.apply(target, arguments);
  };

  return result;
}

module.exports = Spy;