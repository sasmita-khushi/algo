function transposeMatrix(matrix) {
  // Write your code here.
  let container = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let z = 0; z < matrix[i].length; z++) {
      if (!container[z]) {
        container[z] = [];

        //console.log(container);
      }
      container[z].push(matrix[i][z]);
    }
  }

  return container;
}

matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(transposeMatrix(matrix));
