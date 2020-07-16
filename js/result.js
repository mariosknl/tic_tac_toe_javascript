/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import * as elements from './elements.js';

function winner(player1, player2) {
  if (elements.playerTurn.turn % 2 === 0) {
    player1.gamesWon += 1;
    player1.gamesPlayed += 1;
    player2.gamesPlayed += 1;
    player1.winner = true;
    player2.winner = false;
    elements.winnerText[0].innerText = `${player1.name} has won!`;
  } else {
    player2.gamesWon += 1;
    player2.gamesPlayed += 1;
    player1.gamesPlayed += 1;
    player1.winner = false;
    player2.winner = true;
    elements.winnerText[0].innerText = `${player2.name} has won!`;
  }
  elements.winnerText[1].innerText = `${player1.name} has ${player1.gamesWon} victories!`;
  elements.winnerText[2].innerText = `${player2.name} has ${player2.gamesWon} victories!`;
}

const win = () => {
  elements.board.classList.remove('active');
  elements.board.classList.add('inactive');
  elements.winningMessage.classList.remove('inactive');
  elements.winningMessage.classList.add('active');
  winner(elements.players[0], elements.players[1]);
};

const test = (result, array, index, x, y) => {
  result.push(array[index].classList[1]);
  result.push(array[index + x].classList[1]);
  result.push(array[index + y].classList[1]);
};

const draw = (player1, player2) => {
  player1.gamesPlayed += 1;
  player2.gamesPlayed += 1;
  elements.winnerText[0].innerText = "It's a draw";
  elements.board.classList.remove('active');
  elements.board.classList.add('inactive');
  elements.winningMessage.classList.remove('inactive');
  elements.winningMessage.classList.add('active');
};

function checkWinner(result, ele, test = null) {
  let temp = false;

  if (ele !== 'circle' && ele !== 'x') {
    return temp;
  }
  const resultChecker = result.filter((x) => x === ele);
  if (resultChecker.length === 3) {
    temp = true;
    if (test === null) win();
  }
  return temp;
}

function checkRow(elem, index, array, tests = null) {
  const result = [];
  let checker = false;
  if (index % 3 === 0) {
    test(result, array, index, 1, 2);
    checker = checkWinner(result, array[index].classList[1], tests);
  }
  return checker;
}

function checkColumn(elem, index, array, tests = null) {
  const result = [];
  let checker = false;
  if (index < 3) {
    test(result, array, index, 3, 6);
    checker = checkWinner(result, array[index].classList[1], tests);
  }
  return checker;
}

function checkDiagonal(elem, index, array, tests = null) {
  const result = [];
  let checker = false;
  if (index === 0) {
    test(result, array, index, 4, 8);
    checker = checkWinner(result, array[index].classList[1], tests);
  } else if (index === 2 && checker !== true) {
    test(result, array, index, 2, 4);
    checker = checkWinner(result, array[index].classList[1], tests);
  }
  return checker;
}

function result() {
  const array = Array.from(document.querySelectorAll('.cell'));
  array.forEach((elem, index) => {
    checkRow(elem, index, array);
    checkColumn(elem, index, array);
    checkDiagonal(elem, index, array);
  });
  const checker = document.querySelector('.message').innerText.includes('won');
  const count = elements.players[0].start ? 8 : 9;
  if (elements.playerTurn.turn === count && !checker) {
    draw(elements.players[0], elements.players[1]);
  }
}


export default {
  result, checkRow, checkColumn, checkDiagonal,
};
