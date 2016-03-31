module.exports = function generate(isEven) {
  var num = (isEven ? 0 : -1);

  return {
    next: (swap) => {
      num += (swap ? 1 : 2);

      return { value: num };
    },
  };
};
