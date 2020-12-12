function findOppositeNumber(n, inputNumber) {
    const step = n / 2;
    return inputNumber >= step ? inputNumber - step : inputNumber + step;
}

console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));