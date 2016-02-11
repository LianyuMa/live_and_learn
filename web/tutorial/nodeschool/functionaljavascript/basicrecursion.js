function reduce(arr, fn, initial) {
  return arr.length < 1 ? initial : reduce(arr.slice(1), fn, fn(initial, arr[0])); 
}

module.exports = reduce;