const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let cur = 1;
    return {
      next() {
        if (cur > max) return { done: true };
        let value = cur;
        if (value % 15 === 0) {
          value = 'FizzBuzz';
        } else if (value % 3 === 0) {
          value = 'Fizz';
        } else if (value % 5 === 0) {
          value = 'Buzz';
        }
        cur++;
        return { done: false, value };
      },
    };
  },
};

for (let n of FizzBuzz) {
  console.log(n);
}
