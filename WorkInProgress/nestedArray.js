function nestedAdd(array, count) {
  if (typeof array[0] != "number") {
    array[0] = array[0][0];
    nestedAdd(array, count);
  } else if (typeof array[0] === "number") {
    count += array[0];
    return nestedAdd(array, count);
  } else {
    return count;
  }
}

console.log(nestedAdd([1, 2, 3], 0));
nestedAdd([1, [2], 3], 0);
