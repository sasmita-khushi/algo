function isPalindome(str) {
  let flipStr = str.split("").reverse().join("");

  if (flipStr === str) {
    return true;
  }
  return false;
}

console.log(isPalindome("1091"));


//another solution
function x(str) {
  let flipStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    flipStr += str[i];
  }
  return str === flipStr;
}

console.log(x("khusi"));
