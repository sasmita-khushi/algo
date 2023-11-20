// function getVowel(str) {
//   let maxNum = 0;
//   char = "";
//   let obj = { a: 0, e: 0, i: 0, o: 0, u: 0 };
//   for (let c of str) {
//     if (obj[c] >= 0) {
//       obj[c]++;
//     }
//     if (obj[c] > maxNum) {
//       maxNum = obj[c];
//       char = c;
//     }
//   }
//   return char;
// }

// console.log(getVowel("my name is khushi"));

function getVowel(str) {
  obj = {};
  const vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (vowel.includes(c)) {
      if (!obj[c]) {
        obj[c] = 0;
      }
      obj[c]++;
    }
  }
  return obj;
}
console.log(getVowel("my name is khushi"));
