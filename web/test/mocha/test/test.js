const assert = require('assert');
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});


describe('Node', () => {
  it('assert', () => {
    assert.equal(1, true);
    assert(true);
    assert(1);
    // assert(false);
    // assert(0);
    // assert(false, 'it\'s false');
  });

  it('assert.deepEqual & notDeepEqual', () => {
    assert.deepEqual(Error('a'), Error('b'));
    const obj1 = {
      a: {
        b: 1,
      },
    };
    const obj2 = {
      a: {
        b: 2,
      },
    };
    const obj3 = {
      a: {
        b: 1,
      },
    };
    const obj4 = Object.create(obj1);
    assert.deepEqual(obj1, obj1);
    assert.notDeepEqual(obj1, obj2);
    assert.deepEqual(obj1, obj3);
    assert.notDeepEqual(obj1, obj4);
  });

  it('assert.doesNotThrow', () => {
    // assert.doesNotThrow(() => {throw new TypeError('Wrong value');}, SyntaxError);
    // assert.doesNotThrow(() => {throw new TypeError('Wrong value');}, TypeError);
    // assert.doesNotThrow(() => {throw new TypeError('Wrong value');}, TypeError, 'Whoops');
  });
});
