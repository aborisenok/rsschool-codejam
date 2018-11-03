const assert = require('assert');

Object.freeze(assert);
const recursion = require('../task/recursion');

describe('recursion makes an array from binary tree', () => {
  it('1', () => {
    const tree = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    };
    const solutions = recursion(tree);
    assert.deepEqual(solutions, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('2', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: { value: 70, left: { value: 56 }, right: { value: 58 } },
        right: { value: 99, left: { value: 21 }, right: { value: 28 } },
      },
      right: {
        value: 120,
        left: { value: 110, left: { value: 34 }, right: { value: 25 } },
        right: { value: 130 },
      },
    };
    const solutions = recursion(tree);
    assert.deepEqual(solutions, [[100], [90, 120], [70, 99, 110, 130], [56, 58, 21, 28, 34, 25]]);
  });

  it('3', () => {
    const tree = { value: 3 };
    const solutions = recursion(tree);
    assert.deepEqual(solutions, [[3]]);
  });

  it('4', () => {
    const tree = { value: 3, left: { value: 34 }, right: { value: 25 } };
    const solutions = recursion(tree);
    assert.deepEqual(solutions, [[3], [34, 25]]);
  });

  it('5', () => {
    const tree = { value: 1, left: { value: 2, left: { value: 4 } }, right: { value: 3 } };
    const solutions = recursion(tree);
    assert.deepEqual(solutions, [[1], [2, 3], [4]]);
  });
});
