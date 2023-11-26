function twoSum(arr, targetvalue) {
  arr.sort((a, b) => a - b); //[-3,-2,-1,0,1,2,3]
  //console.log(arr);

  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum > targetvalue) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return [];
}
console.log(twoSum([1, 2, -3, -2, 3, -1, 0]));
