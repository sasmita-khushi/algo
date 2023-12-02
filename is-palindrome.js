// isPalindrome-
// Write a recursive function called isPalindrome
//  which returns true if the string passed to it is a palindrome (reads the same forward and backward).
//   Otherwise it returns false.
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

//-BY USING FORLOOP:
// function isPalindrome(str) {
//   let newstr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newstr += str[i];
//     if (newstr === str) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(isPalindrome("foobar"));
// console.log(isPalindrome("tacocat"));

//-BY USING RECURSION :

function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  } else if (str.length === 2) {
    return str[0] === str[1];
  } else if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}
console.log(isPalindrome("foobar")); //false
console.log(isPalindrome("tacocat")); //true
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
