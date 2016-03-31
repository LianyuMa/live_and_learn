module.exports = function *generate(isEven) {
  var num = (isEven ? 0 : -1);
  var x = true;

  while (x) {
    num += 2;
    yield num;
  }
};
