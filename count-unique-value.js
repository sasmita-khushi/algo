// function countUniqueValue(arr) {
//   let obj = {};
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     x = arr[i];
//     if (!obj[x]) {
//       obj[x] = 1;
//       count += 1;
//     }
//   }
//   return count;
// }

// function countUniqueValue(arr) {
//   let prev = arr[0];
//   let count = 1;

//   for (let i = 0; i < arr.length; i++) {
//     let e = arr[i];
//     if (prev !== e) {
//       count++;
//       prev = e;
//     }
//   }
//   return count;
// }
//
console.log(countUniqueValue([1, 1, 2, 2, 2, 2, 5, 5, 6, 6, 8, 9, 9, 9]));
console.log(countUniqueValue([1, 2, 2, 3, 3, 4, 5]));

function countUniqueValue(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let prevLeft = arr[0];
  let prevRight = arr[rightPointer];
  let count = arr[rightPointer] !== arr[leftPointer] ? 2 : 1;
  if (count === 1) return count;

  while (leftPointer < rightPointer) {
    let left = arr[leftPointer];
    let right = arr[rightPointer];

    if (prevLeft !== left) {
      count++;
      prevLeft = left;
    }
    if (prevRight !== right) {
      count++;
      prevRight = right;
    }

    if (left === right) {
      count--;
    }
    leftPointer++;
    rightPointer--;
  }
  return count;
}
