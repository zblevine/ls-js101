const rlSync = require('readline-sync');

function calcMortgage (loanAmount, interestRate, durationMonths) {
  let denom = 1 - Math.pow((1 + interestRate), (-1 * durationMonths));
  return loanAmount * (interestRate / denom);
}

function prompt (str) {
  return rlSync.question(`=> ${str} `);
}

function promptNumber (str) {
  let answer = prompt(str);
  while (isInvalidNumber(answer)) {
    console.log('Please enter a valid positive number.');
    answer = prompt(str);
  }
  return answer;
}

function isInvalidNumber (number) {
  return number.trim() === '' ||
         Number(number) <= 0 ||
         Number.isNaN(Number(number));
}

while (true) {
  console.log("Let's calculate your mortgage!");

  let loanAmount = Number(promptNumber('How large is your loan, in dollars?'), 10);
  let aprPct = Number(promptNumber('What is your APR, in percent?'), 10);
  let interestRate = aprPct / 1200; //dividing by 100 and making it monthly
  let durationMonths = Number(promptNumber('How long is your loan, in months?'), 10);

  let totalMortgage = calcMortgage(loanAmount, interestRate, durationMonths);
  console.log(`Your monthly payment is: $${totalMortgage.toFixed(2)}`);

  if (prompt('Another calculation? (y/n)') === 'n') break;
}
