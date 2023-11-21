function getSquare(arr) {
  let newarr = [];
  for (let i = 1; i < arr.length; i++) {
    newarr.push(i * i);
  }
  return newarr;
}
let arr = [1, 2, , 3, 5, 6, 8, 9];
console.log(getSquare(arr));

newarr = arr.map(y(i * i));
