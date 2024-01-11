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

//