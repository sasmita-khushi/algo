// function fibonacci(num) {
//   let prev = 1;
//   let next = 1;
//   let nth = 0;
//   for (let i = 1; i <= num; i++) {
//     console.log(prev);
//     nth = prev + next;
//     prev = next;
//     next = nth;
//   }
// }
// fibonacci(10);

// function fibonacci(num) {
//   function helper(num) {
//     let result = [];
//     let prev = 1;
//     let next = 1;
//     let nth = 0;
//     for (let i = 1; i <= num; i++) {
//       result.push(prev);
//       nth = prev + next;
//       prev = next;
//       next = nth;
//     }
//     return result;
//   }
//   return helper(num)[num - 1];
//   // let arr = helper(num);
//   //return arr[num-1];
// }
// console.log(fibonacci(4));

// function fib(n) {
//   if (n <= 2) {
//     return 1;
//   }

//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fibonacci(4));

function fibonacci(num) {
  if (num <= 0) {
    return [];
  } else if (num === 1) {
    return [1];
  } else if (num === 2) {
    return [1, 1];
  } else {
    const series = fibonacci(num - 1);
    series.push(series[series.length - 2] + series[series.length - 1]);
    return series;
  }
}
console.log(fibonacci(3));