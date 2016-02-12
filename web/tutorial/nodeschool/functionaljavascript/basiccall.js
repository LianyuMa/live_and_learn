function duckCount() {
  return Array.prototype.reduce.call(arguments, function(count, duck) {
    if (Object.prototype.hasOwnProperty.call(duck, 'quack')) {
      return count+1;
    } else{
      return count;
    }
  }, 0);
}

module.exports = duckCount;