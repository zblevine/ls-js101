// q1 - Not the same, the second one returns nothing so would log undefined

// q2 - object would have [1, 2] in first property

// q3
// A and B: one is one, two is two, three is three. assignment in function
// doesn't mutate
// C: one is two, two is three, three is one

// q4
// variables: boo (line 1), scare (line 1 param), myBoo (line 2),
// halloweenCollection (line 6), myBoo (line 12)
// primitives: "!!!", halloween obj props and values, "greet",
// pass-in to boo(), scare.toUpperCase(), assign to myBoo in function,
// myBoo in console.log, undefined on line 12
// objects: boo function, toUpperCase, console, log, halloweenCollection

// q5

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('2.33.143.2'));
console.log(isDotSeparatedIpAddress('3.5.1'));
console.log(isDotSeparatedIpAddress('2.33.1.43.2'));
console.log(isDotSeparatedIpAddress('2.33.1.hey'));
console.log(isDotSeparatedIpAddress('2.33.1.5555'));