// -CAPITALIZE FIRST:
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

//-BY USING FORLOOP:
// function capitalizeFirst(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let x = arr[i].split("");
//     x[0] = x[0].toUpperCase();
//     newArr.push(x.join(""));
//   }
//   return newArr;
// }

function capitlize(arr) {
  if (arr.length === 0) {
    return [];
  }

  let x = arr[0].split("");
  x[0] = x[0].toUpperCase();
  x = x.join("");
  // [Manas,Ranja,Tunga]
  return [x, ...capitlize(arr.slice(1))];
}
let arr = ["manas", "ranjan", "tunga"];
console.log(capitlize(arr));

// let w = arr.map((e) => {
//   let x = e.split("");
//   x[0] = x[0].toUpperCase();
//   return x.join("");
// });
// console.log(w);
