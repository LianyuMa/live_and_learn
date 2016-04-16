var integer = process.argv[2];
var uint32View = new Uint32Array(1);
uint32View[0] = integer;
var uint16View = new Uint16Array(uint32View.buffer);
console.log(JSON.stringify(uint16View));
