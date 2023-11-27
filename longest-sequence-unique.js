function findLongestSequenceOfUniqueCharacter(str) {
  let obj = {};
  let longestSequence = "";
  let tempLongestSequence = "";

  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (!obj[x]) {
      tempLongestSequence += x;
      obj[x] = true;
    } else {
      if (tempLongestSequence.length > longestSequence.length) {
        longestSequence = tempLongestSequence;
      }
      obj = {};
      tempLongestSequence = "";
      tempLongestSequence += x;
      obj[x] = true;
    }
  }
  console.log(tempLongestSequence, longestSequence);
  return tempLongestSequence.length > longestSequence.length
    ? tempLongestSequence
    : longestSequence;
}
console.log(findLongestSequenceOfUniqueCharacter("hellothereabcdefghijk"));
