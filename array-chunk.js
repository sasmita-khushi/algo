//  chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]

//  chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5];

function chunk(arr, size) {
  let newArr = [];
  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    let l = nums.push(arr[i]);
    if (l === size) {
      newArr.push(nums);
      nums = [];
    }
  }
  if (nums.length > 0) {
    newArr.push(nums);
  }
  return newArr;
}

let arr = chunk([1, 2, 3, 4, 5], 2);
console.log(arr);
