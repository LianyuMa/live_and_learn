const input = process.argv.slice(2);
const result = input.map((x) => x[0]).reduce((result, x) => result += x);
console.log(result);
