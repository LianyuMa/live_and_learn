module.exports = function average(...nums) {
  const sum = nums.reduce((soFar, value) => soFar + value, 0);
  return sum / nums.length;
};
