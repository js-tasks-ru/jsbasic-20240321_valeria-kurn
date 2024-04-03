function getMinMax(str) {
  let numbers = str.split(' ').filter(item => Number(item)).sort((a, b) => a - b).map(item => Number(item))

  return result = {
    min: numbers[0],
    max: numbers.at(-1)
  };

}