var reduce = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i], i, nums);
  }
  return init;
};
nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
  return accum + curr;
};
init = 0;
console.log(reduce(nums, fn, init));
