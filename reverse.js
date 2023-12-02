// REVERSE:
// Write a recursive function called reverse which accepts a string and
// returns a new string in reverse.

//-BY USING FORLOOP:
function reverse(str) {
  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  return newstr;
}
console.log(reverse("khushi"));

//-BY USING RECURSION:
function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse("khushi"));
