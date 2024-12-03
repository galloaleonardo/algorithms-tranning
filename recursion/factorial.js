var factorial = function (n) {
    if (n === 1)
        return 1;
    return n * factorial(n - 1);
};
var factorialResult = factorial(10);
console.log(factorialResult);
