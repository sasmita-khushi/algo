var compose = function (functions) {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      let fn = functions[i];
      x = fn(x);
    }
    return x;
  };
};
let functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
let _c = compose(functions);
console.log(_c(10));
