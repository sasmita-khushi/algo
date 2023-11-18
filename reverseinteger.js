function reverseInteger(num) {
  let x = num.toString().split("").reverse().join("");
  return parseInt(x, 10);
}
console.log(reverseInteger(15));
