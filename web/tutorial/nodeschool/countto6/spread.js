const nums = process.argv.slice(2);
const min = Math.min(...nums);

console.log(`The minimum of [${nums}] is ${min}`);
