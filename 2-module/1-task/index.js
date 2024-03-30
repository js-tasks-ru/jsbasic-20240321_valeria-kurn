function sumSalary(salaries) {
  let result = 0;

  for (key in salaries) {
    if ((typeof salaries[key] === 'number') && (!isNaN(salaries[key])) && (isFinite(salaries[key]))) {
      result += salaries[key]
    }
  } 

  return result;
}
