function getMinUnproduceChange(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  if (arr[0] !== 1) {
    return 1;
  }
  let sum = 1;
  for (let i = 1; i < arr.length; i++) {
    if (sum + 1 < arr[i]) {
      return sum + 1;
    } else {
      sum += arr[i];
    }
  }
}
//1,2,5,7,9

let arr = [9, 5, 2, 7, 1];
console.log(getMinUnproduceChange(arr));
