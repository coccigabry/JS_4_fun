const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error');
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice(''); //insert here your choice and... good luck!
  const computerChoice = getComputerChoice();
  if (userChoice) {
    console.log('You threw ' + userChoice);
    console.log('CPU threw ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  } else {
    console.log('You must select a valid option!');
  }
};

playGame();
