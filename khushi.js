//POWER:

// function power(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   }
//   return base * power(base, exponent - 1);
// }
// console.log(power(2, 2));

// //FACTORIAL:
// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }
// console.log(factorial(4));

// //PRODUCT:
// function product(arr) {
//   if (arr.length === 0) {
//     return 1;
//   }
//   return arr[0] * product(arr.slice(1));
// }
// console.log(product([1, 4, 3]));

// //RECURSIVERANGE:
// function recursiveRange(num) {
//   if (num === 0) {
//     return 0;
//   }
//   return num + recursiveRange(num - 1);
// }
// console.log(recursiveRange(5));

// //FIBONACCI:
// function fib(num) {
//   function helper(num) {
//     let result = [];
//     let prev = 1;
//     let next = 1;
//     let nth = 0;
//     for (let i = 0; i < num; i++) {
//       result.push(prev);
//       nth = prev + next;
//       prev = next;
//       next = nth;
//     }
//     return result;
//   }
//   return helper(num)[num - 1];
// }
// console.log(fib(4));

//USING RECURSION:
// function fib(num) {
//   if (num <= 2) {
//     return 1;
//   }
//   return fib(num)[fib(num - 1) + fib(num - 2)];
// }
// // [1,1,2,3,5]

// console.log(fib(4));

//REVERSE:
// function reverse(str) {
//   if (str.length === 1) {
//     return str;
//   }
//   return reverse(str.slice(1)) + str[0];
// }
// console.log(reverse("khushi"));

//REVERSE-ARR:
// function reverse(arr) {
//   if (arr.length === 1) {
//     return arr;
//   }
//   return reverse(arr.slice(1)).concat(arr[0]);
// }
// console.log(reverse([1, 2, 3]));

//PALINDROME:
function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  } else if (str.length === 2) {
    return arr[0] === arr[1];
  } else if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

console.log(isPalindrome("foobar")); //false
console.log(isPalindrome("tacocat")); //true
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
