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
