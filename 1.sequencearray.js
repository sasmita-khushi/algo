function isSequence(arr1, arr2) {
  let matchCount = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[matchCount]) {
      matchCount++;
    }
  }
  return matchCount === arr2.length;
}
let arr1 = [2, 3, 11, 12, 4, 0, 5, 6, 8, 9];
let arr2 = [4, 6, 8, 9];
console.log(isSequence(arr1, arr2));
