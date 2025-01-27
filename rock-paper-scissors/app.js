const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.choice-btn');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
  addAnimation();
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 3) {
    computerChoice = 'paper';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'It\'s a draw!';
  } else if ((computerChoice === 'rock' && userChoice === 'scissors') ||
             (computerChoice === 'scissors' && userChoice === 'paper') ||
             (computerChoice === 'paper' && userChoice === 'rock')) {
    result = 'You lose!';
  } else {
    result = 'You win!';
  }
  resultDisplay.innerHTML = result;
}

function addAnimation() {
  // Adding simple animation effects
  const resultClass = result === 'You win!' ? 'win-animation' : result === 'You lose!' ? 'lose-animation' : 'draw-animation';
  resultDisplay.classList.add(resultClass);
  
  // Remove the animation class after the animation ends
  setTimeout(() => {
    resultDisplay.classList.remove(resultClass);
  }, 1000);
}

// CSS for animations
const style = document.createElement('style');
style.innerHTML = `
  .win-animation {
    color: green;
    animation: win 1s ease;
  }

  .lose-animation {
    color: red;
    animation: lose 1s ease;
  }

  .draw-animation {
    color: gray;
    animation: draw 1s ease;
  }

  @keyframes win {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  @keyframes lose {
    0% { transform: scale(1); }
    50% { transform: scale(0.8); }
    100% { transform: scale(1); }
  }

  @keyframes draw {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

document.head.appendChild(style);