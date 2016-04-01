module.exports = function *generate() {
  var num = 0;
  var multiplier = 1;
  var x = true;

  while (x) {
    num++;
    multiplier = yield num * multiplier;
    if (!multiplier) {
      multiplier = 1;
    }
  }
};
