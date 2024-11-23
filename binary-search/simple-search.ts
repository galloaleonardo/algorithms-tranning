const simpleSearch = (listNames: string[], name: string) => {
  let index = 0;
  let limit = listNames.length - 1;

  while (index <= limit) {
    const attempt = listNames[index];
    
    console.log('index: ', index, 'limit: ', limit, 'attempt:', attempt);

    if (attempt === name) return index;

    index++;
  }
}

const simpleListNames = [
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

const simpleChosenName = 'Gabriel';
const simplePositionOfName = simpleSearch(simpleListNames, simpleChosenName);

console.info(`The position of number ${simpleChosenName} is ${simplePositionOfName}.`);