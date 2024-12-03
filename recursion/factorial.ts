const factorial = (n: number): number => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

const factorialResult = factorial(10);

console.log(factorialResult);