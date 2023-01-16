// ДЗ 15. Рекурсивне зведення в ступінь
function getSum(sum, degree) {
  if (degree === 1) {
    return sum;
  }
  return sum * getSum(sum, degree - 1);
}
console.log(getSum(3, 3));
  