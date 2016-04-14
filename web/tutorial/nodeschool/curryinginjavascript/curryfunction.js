function convertToCurry(fx) {
  const arity = fx.length;

  return function f1() {
    const args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fx.apply(null, args);
    }
    return function f2() {
      const args2 = Array.prototype.slice.call(arguments, 0);
      return f1.apply(null, args.concat(args2));
    };
  };
}

// ES6 Rest parameters
// function convertToCurry(fx) {
//   const arity = fx.length;

//   return function f1(...theArgs) {
//     const theArgs = Array.prototype.slice.call(arguments, 0);
//     if (theArgs.length >= arity) {
//       return fx.apply(null, theArgs);
//     }
//     return function f2(...theArgs2) {
//       const theArgs2 = Array.prototype.slice.call(arguments, 0);
//       return f1.apply(null, theArgs.concat(theArgs2));
//     };
//   };
// }

module.exports = convertToCurry;
