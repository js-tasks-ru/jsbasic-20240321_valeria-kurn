function factorial(n) {
  let result = 1;

  if (n > 1) {
    while (n > 1) {
      result *= n;
      n--;
    }
  }
  
  return result;
}
