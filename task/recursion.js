function recursion(tree) {
  const resArray = [];
  function preOrder(root, i = 0) {
    let deepness = i;
    if (!resArray[deepness]) {
      resArray[deepness] = [];
    }
    resArray[deepness].push(root.value);
    deepness += 1;
    if (root.left) {
      preOrder(root.left, deepness);
    }
    if (root.right) {
      preOrder(root.right, deepness);
    }
  }
  preOrder(tree);
  return resArray;
}

module.exports = recursion;
