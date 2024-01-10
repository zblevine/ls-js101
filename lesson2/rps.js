const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_OUTCOMES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors']
};

let humanScore = 0;
let compScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (choice === computerChoice) {
    prompt("It's a tie!");
  } else if (WINNING_OUTCOMES[choice].includes(computerChoice)) {
    prompt('You win!');
  } else {
    prompt('Computer wins!');
  }
}

function getPlayAgainAnswer() {
  prompt('Do you want to play again?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  return answer;
}

function incrementScore(choice, computerChoice) {
  if (WINNING_OUTCOMES[choice].includes(computerChoice)) {
    humanScore++;
  } else if (WINNING_OUTCOMES[computerChoice].includes(choice)) {
    compScore++;
  }
}

function resetScore() {
  humanScore = 0;
  compScore = 0;
  prompt('Scores resetting...');
}

while (true) {
  prompt(`You: ${humanScore}, Computer: ${compScore}`);
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
  incrementScore(choice, computerChoice);

  if (humanScore === 3) {
    prompt('You won the set!');
    resetScore();
  } else if (compScore === 3) {
    prompt('The computer won the set!');
    resetScore();
  }

  let answer = getPlayAgainAnswer();
  if (answer[0] !== 'y') break;
}
