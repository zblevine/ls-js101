//q1

function removeAll1 (arr) {
  arr.splice(0);
}

function removeAll2 (arr) {
  while (arr.length) {
    arr.pop();
  }
}

function removeAll3 (arr) {
  while (arr.length) {
    arr.shift();
  }
}

let numbers1 = [1, 2, 3, 4];
let numbers2 = [1, 2, 3, 4];
let numbers3 = [1, 2, 3, 4];

removeAll1(numbers1);
removeAll2(numbers2);
removeAll3(numbers3);

console.log(numbers1);
console.log(numbers2);
console.log(numbers3);

//q2 - wasn't sure if arrays were coerced to strings or to NaN

//q3 - "hello there", primitives point to value

//q4 - arr1 is unchanged, slice() makes a new copy - EDIT: I got tricked!
//New copy of an array, but not of nested objects

//q5

function isColorValid1(color) {
  return (color === "blue" || color === "green");
}

function isColorValid2(color) {
  return ['blue', 'green'].includes(color);
}

console.log(isColorValid1('blue'));
console.log(isColorValid1('purple'));
console.log(isColorValid2('green'));
console.log(isColorValid2('red'));

/* q6
variables: arr (line 1), newArr (line 2), num (line 4), newNum (line 5),
double (line 7), num (param line 7)
primitives: 1, 2, 3 (line 1), 0 (line 4), 2 (line 8)
objects: arr (line 1), double (line 7) - I don't think newArr is since it
points to same object
*/
