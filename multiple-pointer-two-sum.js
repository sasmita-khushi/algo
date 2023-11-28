// write a function called sumzero which accepts a sorted array of interger.
// the function should find the first pair where the sum is 0.return an array that includes both where sum is 0.
// return an array that includes both values that sum is zero or undefined if a pair doesnot exit.

// sumzero([-3,-2,-1,0,1,2,3])//[-3,3]

// sumzero([-2,0,1,3])//undefined
// sumzero([1,2,3])//undefined

function SumZero(arr, targetvalue) {
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
console.log(SumZero([1, 2, -3, -2, 3, -1, 0]));
