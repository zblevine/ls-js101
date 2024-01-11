//q1

let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replace('important', 'urgent'));

//q2

function reverseForEach(arr) {
  let newArr = [];
  arr.forEach(ele => newArr.unshift(ele));
  return newArr;
}

console.log(reverseForEach([1, 2, 3, 4, 5]));

//q3

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

//q4

let famousWords = "seven years ago...";
let prefix = "Four score and ";

console.log(prefix + famousWords);
console.log(`${prefix}${famousWords}`);

//q5

let arr1 = [1, 2, 3, 4, 5];
arr1.splice(2, 1);
console.log(arr1);

//q6

const nested = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
console.log(nested.flat());
console.log([].concat(...nested));

//q7

let flintstonesObj = { Fred: 0, Wilma: 1, Barney: 2,
  Betty: 3, Bambam: 4, Pebbles: 5 };
console.log(Object.entries(flintstonesObj).filter(pair => pair[0] === 'Barney').shift());

//q8

let nums = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(nums));
console.log(Array.isArray(table));

//q9

let title = "Flintstone Family Members";
let lenToIndent = (40 - title.length) / 2;
console.log(" ".repeat(lenToIndent) + title);

//q10

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);
