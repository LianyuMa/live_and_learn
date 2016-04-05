const rawArgs = process.argv.slice(2);
const args = [];

rawArgs.forEach((val) => {
  const commaSep = val.split(',');
  commaSep.forEach((val) => {
    if (val !== '') args.push(+val);
  });
});

function avg(...args) {
  return args.reduce((sum, n) => sum + n) / args.length;
}

console.log(avg(...args));
