function getSum(num) {
  let numOne = num;
  return function (numTwo) {
    numOne += numTwo;
    return numOne;
  };
}
const testFunc = getSum(10);
console.log(testFunc(3));
console.log(testFunc(3));
console.log(testFunc(3));
  