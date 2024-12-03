const regressiveCount = (num: number): void => {
  if (num === 0)  return;
  
  console.log(num);
  regressiveCount(num - 1);
}

regressiveCount(1000);