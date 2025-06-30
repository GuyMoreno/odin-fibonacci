function fibs(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  let fibArray = [0, 1];

  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
}
//         0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610
//indexes [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// n = 3, i = 2, fibArray[2] + fibArray[1] = 1 + 0 = 1
// n = 4, i = 3, fibArray[3] = fibArray[2] + fibArray[1] = 1 + 1 = 2
// n = 5, i = 4, fibArray[4] = fibArray[3] + fibArray[2] = 2 + 1 = 3

console.log(fibs(500));

function fibRec(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  let fibArray = fibRec(n - 1);
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  return fibArray;
}
