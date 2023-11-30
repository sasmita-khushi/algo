// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average,
//  determine if there is a pair of values in the array where the average of the pair equals the target average.
//   There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

//SOLUTION 1 USING HASH TABLE-
// function averagePair(arr, target) {
//   if (arr.length === 0) {
//     return false;
//   }
//   let obj = {};
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     let targetsum = target * 2;
//     let x = arr[i];
//     if (obj[x]) {
//       array.push(x, targetsum - x);
//       //console.log(array);
//       return true;
//     } else {
//       let y = targetsum - x;
//       obj[y] = true;
//     }
//   }
//   return false;
// }
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// console.log(averagePair([], 4));

//SOLUTION 2 USING MULTIPLE POINTER-

function averagePair(arr, target) {
  if (arr.length === 0) {
    return false;
  }

  let targetSum = target * 2;
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let left = arr[leftPointer];
    let right = arr[rightPointer];
    if (left + right > targetSum) {
      rightPointer--;
    } else if (left + right < targetSum) {
      leftPointer++;
    } else {
      return true;
    }
  }
  return false;
}
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
