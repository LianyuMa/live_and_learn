const test = require('tape');
const repeatCallback = require(process.argv[2]);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

test('test for repeatCallback', (t) => {
  const num = getRandomInt(1, 10);
  t.plan(num);
  repeatCallback(num, () => {
    t.pass('callback called');
  });
});
