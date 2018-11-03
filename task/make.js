function make(...params) {
  const values = [];
  function foo(...args) {
    if (args[0] instanceof Function) {
      const func = args[0];
      return values.length ? values.reduce(func) : null;
    }
    values.push(...args);
    return foo;
  }
  return foo(...params);
}

module.exports = make;
