const lookForLowerValue = (list: number[]): number => {
  let lower = list[0];
  let lowerIndex = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] < lower) {
      lower = list[i];
      lowerIndex = i;
    }
  }

  return lowerIndex;
}

const selectionSort = (list: number[]): number[] => {
  const newList: number[] = [];
  const listLength = list.length;

  for (let i = 0; i < listLength; i++) {
    const lowerIndex = lookForLowerValue(list);
    newList.push(list[lowerIndex]);
    list.splice(lowerIndex, 1);
  }

  return newList;
}

console.log(selectionSort([10, 90, 2, 9, 4, 25, 95, 11]));