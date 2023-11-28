// function search(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(search([1, 2, 8, 4, 5, 6], 8));

function search(arr, value) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    let currrentElement = arr[middle];
    if (arr[middle] < value) {
      min = middle + 1;
    } else if (arr[middle] > value) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  retuen - 1;
}
console.log(search([1, 2, 8, 4, 5, 6], 8));
