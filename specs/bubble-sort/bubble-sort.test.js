/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  let swapped = true;
  // called a sentinel variable

  while (swapped) {
    for (let i = 0; i < nums.length; i++) {
      // let orig = nums[i];
      // let other = nums[i + 1];
      if (nums[i] > nums[i + 1]) {
        // could write a function that does this
        let orig = nums[i];
        let other = nums[i + 1];
        nums[i] = other;
        nums[i + 1] = orig;
        swapped = true;
        break
      } else {
        swapped = false;
      }
    }
  }
  return nums;
}

// Break, not continue because we need to start from the beginning again.
// Switching variable assignment didn't matter.

// Maybe look into optimizing bubble sort? Keep track of iterations.
// You can use a do loop which means it will happen at least once.

// console.log(bubbleSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
