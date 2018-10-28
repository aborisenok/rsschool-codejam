function sumOfOther(arr) {
  const result = arr.map((elem, i, array) => array.reduce((accum, current, j) => (
    i !== j ? accum + current : accum
  ), 0));
  return result;
}

module.exports = sumOfOther;
