// #1
function numbers(newArray) {
  const sumLength = [];
  let sum = 0;
  for (let i = 0; i < newArray.length; i += 1) {
    if (typeof (newArray[i]) === 'number') {
      sum += newArray[i];
      sumLength.push([i]);
    }
  }
  return (sum / sumLength.length);
}
numbers([5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78]);
// #2

function doMath(x, znak, y) {
  let result = 0;
  switch (znak) {
    case '+':
      result = (x + y);
      break;
    case '-':
      result = (x - y);
      break;
    case '*':
      result = (x * y);
      break;
    case '/':
      result = (x / y);
      break;
    case '%':
      result = (x * y) / 100;
      break;
    case '^':
      result = (x ** y);
      break;
    default:
      result = ('Ooops... Щось пішло не так');
  }
  return result;
}
const xNum = +prompt('Введіть перше чило');
const yNum = +prompt('Ведіть друге число');
const zNum = prompt('Введіть що ви хочете зробити', ' +, -, *, /, %, ^');
alert(doMath(xNum, zNum, yNum));