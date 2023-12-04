function addTwo(arr) {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i] + 2);
  }
  return new_arr;
}
//console.log(addTwo([1, 2, 3, 4, 5]));

function _addTwo(arr) {
  if (arr.length === 0) {
    return [];
  }

  return [arr[0] + 2, ..._addTwo(arr.slice(1))];
  //[1,[2,3,[4,[5,[]]]]]
}

console.log(_addTwo([1, 2, 3, 4, 5]));
