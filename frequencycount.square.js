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
