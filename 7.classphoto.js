function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort(function (a, b) {
    return a - b;
  });
  blueShirtHeights.sort(function (a, b) {
    return a - b;
  });
  var isRedBig = redShirtHeights[0] > blueShirtHeights[0];
  if (isRedBig) {
    return redShirtHeights.every((e, i) => {
      return e > blueShirtHeights[i];
    });
  } else {
    return redShirtHeights.every((e, i) => {
      return e < blueShirtHeights[i];
    });
  }
  //   return redShirtHeights.every((e, i) => {
  //     if (isRedBig) {
  //       return e > blueShirtHeights[i];
  //     } else {
  //       return e < blueShirtHeights[i];
  //     }
  //   });
}

x = redShirtHeights = [5, 8, 1, 3, 4];
y = blueShirtHeights = [6, 9, 2, 4, 5];
console.log(classPhotos(x, y));
