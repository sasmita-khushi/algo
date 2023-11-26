function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  // [-8,-6,1,2,3,,5,6,12]
  //8  14
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    let selectedNum = array[i];
    let twoNumsSum = targetSum - selectedNum;
    let hash = {};
    for (let z = 0; z < array.length; i++) {
      if (i !== z) {
        let num = array[z];
        if (hash[num] !== undefined) {
          arr.push(selectedNum, num, target - num);
        } else {
          hash[targetSum - num] = 0;
        }
      }
    }
  }
  return arr;
}

console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8], 9));
