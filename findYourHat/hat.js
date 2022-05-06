const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this._field = field;
  }

  get field() {
    return this._field;
  }

  print() {
    for (const element of this._field) {
      console.log(element.join(' '));
    }
  }
  //generate a field of given dimension with the starting pointer on the top-left corner, random holes and one hat in ramdon position
  static generateField(width, height) {
    const characters = ["O", "░", "░" , "░", "░"];
    let field = [];
    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        let addCharacter = characters[Math.floor(Math.random() * characters.length)];
        row.push(addCharacter);
      }
      field.push(row);
    }
    field[0][0] = pathCharacter;
    let randomRow = 0;
    let randomChar = 0;
    while (randomRow < height/2 && randomChar < width) {
      randomRow = Math.floor(Math.random() * height);
      randomChar = Math.floor(Math.random() * width);
    }
    field[randomRow][randomChar] = hat;
    return field;
  }
    //method to make the game playable
    playGame() {
    let currentlyPlaying = true;
    let x = 0;
    let y = 0;
    console.log(this.print());
    let moveSelection;
    //set the commands and let the player select moves
    while (currentlyPlaying) {
      moveSelection = prompt("Which way would you like to move? (Up = 'U' Down = 'D' Left = 'L' Right = 'R'");
      if (moveSelection.toUpperCase() === 'U' && y !== 0) {
        y -= 1;
      } else if (moveSelection.toUpperCase() === 'U' && y === 0) {
        console.log('You have already reached the top of the board');
      } else if (moveSelection.toUpperCase() === 'D' && y !== (inputHeight - 1)) {
        y += 1;
      } else if (moveSelection.toUpperCase() === 'D' && y === (inputHeight - 1)) {
        console.log('You have already reached the bottom of the board');
      } else if (moveSelection.toUpperCase() === 'L' && x !== 0) {
        x -= 1;
      } else if (moveSelection.toUpperCase() === 'L' && x === 0) {
        console.log('You have already reached the left side of the board');
      } else if (moveSelection.toUpperCase() === 'R' && x !== (inputWidth - 1)) {
        x += 1;
      } else if (moveSelection.toUpperCase() === 'R' && x === (inputWidth - 1)) {
        console.log('You have already reached the right side of the board');
      } else if (moveSelection === 'clear') {
        break;
      } else {
        console.log('Invalid Entry');
      }
      if (this.field[y][x] === hat) {
        console.log("You've found your hat! You win!");
        currentlyPlaying = false;
        break;
      } else if (this.field[y][x] === hole){
        console.log('Game Over! You fell through the hole!');
        currentlyPlaying = false;
        break;
      } else {
        this.field[y][x] = pathCharacter;
        console.log(this.print());
      }
    }
  }

}

let inputHeight = prompt('How tall would you like your game field to be?');
let inputWidth = prompt('How wide?');
const fieldArray = Field.generateField(inputHeight, inputWidth);
const gameField = new Field(fieldArray);
gameField.playGame();
