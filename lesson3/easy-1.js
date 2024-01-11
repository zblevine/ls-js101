//q2
const strExclam = str => str[str.length - 1] === "!";
console.log(strExclam("Come over here!"));
console.log(strExclam("What's up, Doc?"));

//q3
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
console.log(Object.keys(ages).includes('Spot'));

//q4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
let firstLetter = munstersDescription[0].toUpperCase();
let restOfWord = munstersDescription.toLowerCase().slice(1);
console.log(`${firstLetter}${restOfWord}`);
// => The munsters are creepy and spooky.

//q6
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);
console.log(ages);

//q7
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes("Dino"));
console.log(str2.includes("Dino"));

//q8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
console.log(flintstones);

//q9
let flintstones2 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
console.log(flintstones2.concat("Dino", "Hoppy"));

//q10
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.slice(0, advice.indexOf('house')));