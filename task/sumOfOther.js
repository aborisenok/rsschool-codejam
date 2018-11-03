function sumOfOther(arr) {
  const sumOfValues = arr.reduce((accum, elem) => accum + elem, 0);
  return arr.map(elem => sumOfValues - elem);
}

module.exports = sumOfOther;
