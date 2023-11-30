// -BY RECURSION:

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
//console.log(factorial(4));

//-BY FOR LOOP:
function factorial(num) {
  let factorial = 1;
  for (let i = num; i >= 0; i--) {
    factorial *= i;
  }
  return factorial;
}
//console.log(factorial(4));

function recursiveRange(num) {
  if (num === 0) {
    return 0;
  }
  return num + recursiveRange(num - 1);
}
//console.log(recursiveRange(6));
