const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('../task/sumOfOther');

describe('sumOfOther take the array and return the array where each elem is a sum of other', () => {
  it('1', () => {
    const solutions = sumOfOther([2, 3, 4, 1, 5]);
    assert.deepEqual(solutions, [13, 12, 11, 14, 10]);
  });
  
  it('2', () => {
    const solutions = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(solutions, [8, 7, 6, 9]);
  });
  
  it('3', () => {
    const solutions = sumOfOther([1, 1, 1, 1]);
    assert.deepEqual(solutions, [3, 3, 3, 3]);
  });
  
  it('4', () => {
    const solutions = sumOfOther([20, 10, 40, 50]);
    assert.deepEqual(solutions, [100, 110, 80, 70]);
  });
  
  it('5', () => {
    const solutions = sumOfOther([0, 0, 0, 0]);
    assert.deepEqual(solutions, [0, 0, 0, 0]);
  });
  
  it('6', () => {
    const solutions = sumOfOther([12, -5, 7, 1, 9]);
    assert.deepEqual(solutions, [12, 29, 17, 23, 15]);
  });
  
  it('7', () => {
    const solutions = sumOfOther([-2, -1, -1, -2]);
    assert.deepEqual(solutions, [-4, -5, -5, -4]);
  });
  
  it('8', () => {
    const solutions = sumOfOther([100, -100, 0, 1]);
    assert.deepEqual(solutions, [-99, 101, 1, 0]);
  });

  it('9', () => {
    const solutions = sumOfOther([1, 5, 6, 8, 10, 122]);
    assert.deepEqual(solutions, [151, 147, 146, 144, 142, 30]);
  });
});
