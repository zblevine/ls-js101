// q1

function outputASCII(str, num) {
  return Array(num).fill(str)
    .map((ele, idx) => ' '.repeat(idx).concat(ele))
    .join('\n');
}

console.log(outputASCII('The Flintstones Rock!', 10));

// q2

let munstersDescription = "The Munsters are creepy and spooky.";

function swapCase(char) {
  return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase();
}

console.log(Array.from(munstersDescription)
  .map(char => swapCase(char))
  .join(''));

// q3

function factors(number) {
  if (!(Number.isInteger(number)) || number < 1) {
    return 'Not a positive integer';
  }
  return Array.from({length: number}, (_, idx) => idx + 1)
    .filter(ele => !(number % ele));
}

console.log(factors(24));
console.log(factors(23));
console.log(factors(360));

// q4 - push modifies the original array, concat does not

// q5 - 0.9, the second might be false because of weird float behavior
// EDIT: I was right about the float behavior, but not 0.9. even weirder!

// q6 - false, NaN !== NaN. You can use Number.isNaN() or just test if a value
// is not strictly equal to itself

// q7 - 34, answer is not changed

// q8 - yes, the data got changed, since Object.values() returns an array of
// pointers to the same objects that were originally defined

// q9 - paper

// q10 - would be a call on bar("yes"), so would return "no"
