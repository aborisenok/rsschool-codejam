const assert = require('assert');

Object.freeze(assert);
const make = require('../task/make');

describe('make should apply taken function to taken arguments', () => {
  function sum(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  function mult(a, b) {
    return a * b;
  }

  it('1', () => {
    const solutions = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(solutions, 777);
  });

  it('2', () => {
    const solutions = make(1, 2, 3, 4)(5, 6)(7)(sum);
    assert.deepEqual(solutions, 28);
  });

  it('3', () => {
    const solutions = make(15)(-34, -21, 666)(41)(sum);
    assert.deepEqual(solutions, 667);
  });

  it('4', () => {
    const solutions = make(154, 22)(34, 21, 0)(41, 6)(sub);
    assert.deepEqual(solutions, 30);
  });

  it('5', () => {
    const solutions = make(0)(34, 21, 6)(41)(sub);
    assert.deepEqual(solutions, -102);
  });

  it('6', () => {
    const solutions = make(15, 2, 3, -86)(34, 21, 22)(1)(sub);
    assert.deepEqual(solutions, 18);
  });

  it('7', () => {
    const solutions = make(1)(3, 5, 7)(9)(mult);
    assert.deepEqual(solutions, 945);
  });

  it('8', () => {
    const solutions = make(0)(2, 3, 7)(1)(mult);
    assert.deepEqual(solutions, 0);
  });

  it('9', () => {
    const solutions = make(4, 2, 8, 1)(mult);
    assert.deepEqual(solutions, 64);
  });
});
