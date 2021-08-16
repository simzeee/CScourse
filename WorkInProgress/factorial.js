function factorial(n) {
  if (n === 1 || n <= 0) {
    return n;
  }
  return n * factorial(n-1)
}

console.log(factorial(10));
