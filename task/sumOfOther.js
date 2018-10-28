function sumOfOther(arr){
  let result = arr.map((elem, i, array) => {
    return array.reduce((accum, current, j) => {
      return i !== j ? accum + current : accum;
    }, 0);
  });
  return result;
}

module.exports = sumOfOther;