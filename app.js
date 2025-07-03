function fibs() {
  let first = 0;
  let second = 1;

  // hold the result in an array
  const result = [];

  const number = parseInt(
    prompt("Enter the number of terms in the sequence: ")
  );

  console.log("🔢 Number of terms:", number);

  // no matter what, we always print the first two numbers!!
  if (number >= 1) {
    result.push(first);
    console.log("📥 Added first:", first);
  }
  if (number >= 2) {
    result.push(second);
    console.log("📥 Added second:", second);
  }

  // now we can start the loop from 3rd number
  for (let i = 3; i <= number; i++) {
    const third = first + second;
    result.push(third);

    // every iteration, we need to update the first and second numbers
    // so that we can calculate the next number in the sequence

    console.log(`🔁 Step ${i - 2}:`);
    console.log(`   ➕ ${first} + ${second} = ${third}`);
    console.log("   📥 Result now:", result);

    first = second;
    second = third;
  }
  console.log("✅ Final result:", result);

  return result;
}

// const sequence = fibs();
// console.log(sequence.join(" "));

// recursive version of Fibonacci sequence
function fibRec(number) {
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else {
    return fibRec(number - 1) + fibRec(number - 2);
  }
}

function fibArray(number) {
  const arr = [];
  // Generate Fibonacci numbers up to the given number
  // i = 1 because of indexing
  for (let i = 0; i <= number; i++) {
    arr.push(fibRec(i));
  }
  return arr;
}

const number = parseInt(prompt("Enter a number: "));
console.log(fibArray(number).join(" "));
