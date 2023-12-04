function capitalize(arr) {
  if (arr.length === 0) {
    return [];
  }

  return [arr[0].toUpperCase(), ...capitalize(arr.slice(1))];
}
let words = ["i", "am", "learning", "recursion"];
console.log(capitalize(words));
