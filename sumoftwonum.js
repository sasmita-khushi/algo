function twoNumberSum(arr, targetSum) {
  let obj = {}; //  {7:3,5:5,14:4, 2:8,-1:11, 9:1,11:-1}
  for (let e of arr) {
    if (obj[e]) {
      return [e, obj[e]];
    } else {
      let x = targetSum - e;
      obj[x] = e;
    }
  }
  return [];
}
let arr = [3, 5, -4, 8, 11, 1, -1, 6];
console.log(twoNumberSum(arr, 10));
