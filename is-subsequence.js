// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and
// checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string,
// without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
  let counter = 0;

  for (let i = 0; i < str2.length; i++) {
    let c = str2[i];
    if (str1[counter] === c) {
      counter++;
      if (counter === str1.length) {
        return true;
      }
    }
  }
  return false;
}
console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
