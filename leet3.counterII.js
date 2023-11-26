var createCounter = function (init) {
  var _init = init;
  return {
    increment: function () {
      return ++init;
    },
    decrement: function () {
      return --init;
    },
    reset: function () {
      return (init = _init);
    },
  };
};
let counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
