function fibs() {
  let first = 0;
  let second = 1;

  // hold the result in an array
  const result = [];

  const number = parseInt(
    prompt("Enter the number of terms in the sequence: ")
  );

  // no matter what, we always print the first two numbers!!
  if (number >= 1) {
    result.push(first);
  }
  if (number >= 2) {
    result.push(second);
  }

  // now we can start the loop from 3rd number
  for (let i = 3; i <= number; i++) {
    const third = first + second;
    result.push(third);

    // every iteration, we need to update the first and second numbers
    // so that we can calculate the next number in the sequence
    first = second;
    second = third;
  }
  return result;
}

// Call the function and print the result as one line:
const sequence = fibs();
// Print the sequence as a single line
console.log(sequence.join(" "));

// recursive version of Fibonacci sequence
function fibRec(number) {

  // Base cases:
  return number <= 1 // if the number is 1 / 0, return 0
    ? 0
    : number <= 2 // If the number is 1 or 2, return 1
    ? 1
    : fibRec(number - 1) + fibRec(number - 2); // Recursive case: return the sum of the two preceding numbers
}

function fibArray(number) {
  const arr = [];
  // Generate Fibonacci numbers up to the given number
  // i = 1 because of indexing
  for (let i = 1; i <= number; i++) {
    arr.push(fibRec(i));
  }
  return arr;
}

const number = parseInt(prompt("Enter a number: "));
console.log(fibArray(number).join(" "));
