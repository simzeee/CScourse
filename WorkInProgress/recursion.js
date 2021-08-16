function countTo(max, current, list) {
  if (current > max) return;
  console.log(current);
  list.push(current)
  countTo(max, current + 1, list);
  return list
}

const counts = countTo(5, 1, []);
console.log(counts)

// Always start with the Base Case. The base case is when we stop recursing.
// Almost always, your base case will be the first line of your recursive functino

function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  return sequence[n];
}

console.log(fibonacci(10))