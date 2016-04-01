const test = require('tape');
const fancify = require(process.argv[2]);

test('tests for fancify', (t) => {
  t.equal(fancify('Hi'), '~*~Hi~*~', 'Wraps the string in ~*~');
  t.equal(fancify('Hi', true), '~*~HI~*~', 'Converts the string into ALLCAPS');
  t.equal(fancify('Hi', false, '$'), '~$~Hi~$~',
    'Third optional argument to change the character in the middle');
  t.end();
});
