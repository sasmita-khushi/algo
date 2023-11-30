// //- BY USING FOR LOOP:

function collectOdd(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
//console.log(collectOdd([1, 2, 3, 4, 55, 6, 788, 8]));

//-BY USING HELPER RECURSIVE METHOD:
function collectOdd(arr) {
  let result = [];
  function helper(helperinput) {
    if (helperinput.length === 0) {
      return;
    }
    if (helperinput[0] % 2 !== 0) {
      result.push(helperinput[0]);
    }
    helper(helperinput.slice(1));
  }
  helper(arr);
  return result;
}
//console.log(collectOdd([1, 2, 3, 4, 55, 6, 788, 8]));

//BY USING PURE RECURSION:
function collectOdd(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOdd(arr.slice(1)));
  return newArr;
}
//console.log(collectOdd([1, 2, 3, 4, 5, 66, 7]));
