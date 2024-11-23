const binarySearch = (listNames: string[], name: string) => {
  let low = 0;
  let high = listNames.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const attempt = listNames[middle];
    
    console.log('low: ', low, 'high: ', high, 'middle: ', middle, 'attempt:', attempt);

    if (attempt === name) return middle;

    if (attempt > name) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
}

const binaryListNames = [
  'Benjamin',
  'Charlotte',
  'Daniel',
  'Emma',
  'Fiona',
  'Gabriel',
  'Hannah',
  'Isabella',
  'Jack',
  'Katherine',
]

const binaryChosenName = 'Gabriel';
const binaryPositionOfName = binarySearch(binaryListNames, binaryChosenName);

console.info(`The position of number ${binaryChosenName} is ${binaryPositionOfName}.`);