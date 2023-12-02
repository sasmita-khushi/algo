//-BY USING RECURSION:
function reverse(arr) {
  if (arr.length === 1) {
    return arr;
  }
  return reverse(arr.slice(1)).concat(arr[0]);
}
let x = reverse([1, 2, 3, 4]);
console.log(x);

//-BY USING FOR LOOP:
function reverse(arr) {
  let newarr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newarr.push(arr[i]);
  }
  return newarr;
}
console.log(reverse([1, 2, 3, 4]));
