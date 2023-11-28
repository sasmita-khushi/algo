// Given two strings ,write function to determine if the second string is an anagram of the first.
// An anagram is a word,phrase ,or name formed by
// rearranging the letters of another,such as cinema,formed from iceman.

// validAnagram('','')//true
// validAnagram('aaz','zza')//false
// validAnagram('anagram','nagaram')//true
// validAnagram("rat","car")//false
// validAnagram("awesome","awesom")//false
// validAnagram('qwerty','qeywrt')//true

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj = {};
  let obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    let x = str1[i];
    if (!obj[x]) {
      obj[x] = 1;
    } else {
      obj[x] += 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let x = str2[i];
    if (!obj2[x]) {
      obj2[x] = 1;
    } else {
      obj2[x] += 1;
    }
  }
  for (let prop in obj) {
    if (obj[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
}
console.log(anagram("manas", "saman"));
