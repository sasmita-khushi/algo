// Frequency Counter - sameFrequency
// Write a function called sameFrequency.
//Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  console.log(str1, str2);

  if (str1.length !== str2.length) {
    return false;
  }
  let obj = {};
  let obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    let a = str1[i];
    if (!obj[a]) {
      obj[a] = 1;
    } else {
      obj[a] += 1;
    }
    let b = str2[i];
    if (!obj2[b]) {
      obj2[b] = 1;
    } else {
      obj2[b] += 1;
    }
  }

  //console.log(obj, obj2);

  for (let prop in obj) {
    if (obj[prop] !== obj2[prop]) {
      return false;
    }
  }
  return true;
}
console.log(sameFrequency(185, 281));
