//    write a function called same,which accepts two arrays.
//    The function should return true if every value in the array has
//    it's corresponding value squared in the second array.
//    The frequency of values must be same.

// same([1,2,3],[4,1,9])//true
// same([1,2,3],[1,9])//false
// same([1,2,1],[4,4,1])//false

function same(arr1, arr2) {
  let obj = {};
  let obj2 = {};
  for (let i = 0; i < arr1.length; i++) {
    let x = arr1[i];
    if (!obj[x * x]) {
      obj[x * x] = 1;
    } else {
      obj[x * x] += 1;
    }
  }
  console.log(obj);

  for (let i = 0; i < arr2.length; i++) {
    let x = arr2[i];
    if (!obj2[x]) {
      obj2[x] = 1;
    } else {
      obj2[x] += 1;
    }
  }

  for (let prop in obj) {
    if (obj[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
}
console.log(same([1, 2, 1], [4, 1, 4]));
