function curryN (fn, n) {
  if (typeof n !== 'number') {n = fn.length;}//use the fn's arity as the value for `n`.

  function curry (prev) {
    return function(arg) {
      var args = prev.concat(arg);
      if (args.length < n) {
        return curry(args);
      }
      return fn.apply(this, args);
    }
  }

  return curry([]);
}

module.exports = curryN;