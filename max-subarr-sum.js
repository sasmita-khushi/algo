write a function called maxSubarrSum which accepts an array of integers
and a number called n.the function should calculate the maximum sum of n consecutive elements in the array. 


maxSubarrSum([1,2,5,2,8,1,5],2)//10
maxSubarrSum([1,2,5,2,8,1,5],4)//17
maxSubarrSum([4,2,1,6],1)//6
maxSubarrSum([4,2,1,6,2],4)//13
maxSubarrSum([],4)//null











// function maxSubarrSum(arr, n) {
//   let maxSum = 0;
//   if (arr.length === 0) {
//     return null;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let x = arr[i];
//     let y = 0;
//     if (i < arr.length - 1) {
//       y = arr[i + 1];
//     }

//     //console.log(x, y);

//     if (maxSum < x + y) {
//       maxSum = x + y;
//     }
//   }
//   return maxSum;
// }
// console.log(maxSubarrSum([1, 2, 5, 2, 8, 1, 5], 4));

function maxSubarrSum(arr, n) {
  if (arr.length === 0) return null;
  let counter = 0;
  let sum = 0;
  let maxSum = 0;
  let windowComplete = false;

  for (let i = 0; i < arr.length; i++) {
    let e = arr[i];
    if (windowComplete) {
      let removeElement = arr[i - n];
      sum -= removeElement;
      sum += e;
      if (sum > maxSum) {
        maxSum = sum;
      }
    } else {
      sum += e;
      counter++;
      if (counter === n) {
        windowComplete = true;
        maxSum = sum;
      }
    }
  }

  return maxSum;
}
console.log(maxSubarrSum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarrSum([4, 2, 1, 6], 1));
console.log(maxSubarrSum([], 4));
console.log(maxSubarrSum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarrSum([4, 2, 1, 6, 2], 4));

// 1, 2, 5, 2, 8, 1, 5]

function maxSubarrSum(arr, n) {
  if (arr.length === 0) {
    return null;
  }
  let maxsum = 0;
  let tempsum = 0;
  for (let i = 0; i < n; i++) {
    maxsum += arr[i];
  }
  tempsum = maxsum;
  for (let i = n; i < arr.length; i++) {
    tempsum = tempsum - arr[i - n] + arr[i];

    if (tempsum > maxsum) {
      maxsum = tempsum;
    }
  }
  return maxsum;
}
console.log(maxSubarrSum([1, 2, 3, 4, 5], 2));
