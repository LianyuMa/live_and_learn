const arg1 = process.argv[2];
const arg2 = process.argv[3];

import mdemath from './mdemath';
console.log(mdemath.PI);
console.log(mdemath.sqrt(+arg1));
console.log(mdemath.square(+arg2));
