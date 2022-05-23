function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] > numberList[j + 1]) {
        temp = numberList[j];
        numberList[j] = numberList[j + 1];
        numberList[j + 1] = temp;
      }
    }
  }

  return numberList;
}
console.log([1, 7, 3, 2, 9]);
console.log(bubbleSort(["d", "c", "a"]));

function mappingArr(array) {
  if (!Array.isArray(array) || array.length === 0) return;

  const obj = {};

  for (let i = 0; i < array.length; i++) {
    let number = array[i];

    obj[number] = (obj[number] || 0) + 1;
  }

  let maxKey = undefined;

  for (let key in obj) {
    if (maxKey === undefined) {
      maxKey = key;
    }

    if (maxKey !== undefined && obj[key] >= obj[maxKey]) {
      maxKey = key;
    }
  }

  return maxKey;
}

console.log(mappingArr([1, 2, 2, 3, 3, 4, 4]));
