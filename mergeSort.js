// Build a function mergeSort that takes in an array and returns a sorted array,
//  using a recursive merge sort methodology.
//  An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13],
//  and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

function mergeSort(arr) {
  // Base case:
  // if the array has one (or no) elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index
  const mid = Math.floor(arr.length / 2);

  // new left array from the start to the middle
  const left = arr.slice(0, mid);

  // new right array from the middle to the end
  const right = arr.slice(mid);

  // Recursively sort both halves
  return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([6, 1, 8, 5, 7, 3, 2, 4]).join(" ")); // [0, 1, 1, 2, 3, 5, 8, 13]

// function that merges two sorted arrays into one sorted array
function merge(left, right) {
  const result = [];
  let indexLeft = 0;
  let indexRight = 0;

  // while there are elements in both arrays
  while (indexLeft < left.length && indexRight < right.length) {
    // compare the current elements of both arrays
    if (left[indexLeft] < right[indexRight]) {
      // push the smaller element to the result
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  // If there are remaining elements in either array, add them to the result
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
