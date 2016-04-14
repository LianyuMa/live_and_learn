function convertToCurry (fx) {
	const arity = fx.length;

	return function f1 () {
		const args = Array.prototype.slice.call(arguments, 0);
		if (args.length >= arity) {
			return fx.apply(null, args);
		} else {
			return function f2 () {
				const args2 = Array.prototype.slice.call(arguments, 0);
				return f1.apply(null, args.concat(args2));
			}
		}
	};
}

module.exports = convertToCurry;