function twoNumSum(array, targetsum) {
  let hash = {};
  let _arr = [];
  for (let i = 0; i < array.length; i++) {
    let e = array[i];
   
    if (hash[e]) {
      _arr.push(e, targetsum-e);
    } else {
        let x = targetsum - e;
        hash[x]= true;
    }
  }
  return _arr;
}

console.log([2, 3, 4, 6, 7, 8], 10);
