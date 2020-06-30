/* eslint-disable import/extensions */

import check from './result.js';
import * as elements from './elements.js';


function togglePlayerSign() {
  elements.board.classList.toggle('x');
  elements.board.classList.toggle('circle');
}

const populateBoard = (e, move) => {
  if (e.target.classList.contains('circle') || e.target.classList.contains('x')) {
    return '';
  }
  e.target.classList.add(move.turn % 2 === 0 ? 'circle' : 'x');
  // e.target.classList.add(playerSymbol);

  if (move.turn % 2 === 0) {
    console.log(elements.players[0]);
  } else {
    console.log(elements.players[1]);
  }
  check.result();
  move.turn += 1;
  console.log(move.turn);
  togglePlayerSign();
  return '';
};

function error(color) {
  document.body.style.backgroundColor = color;
}

function validateUser(user) {
  if (user.value.length < 3) {
    error('rgb(189,87,87');
    return '';
  } error('rgb(87,189,130');
  return true;
}

function nextSlide(parent, nextForm) {
  parent.classList.add('inactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');
  nextForm.classList.remove('inactive');
}
let count = 0;
function restartGame() {
  if (elements.players[0].start === true) {
    elements.board.classList.value = 'board x active';
    elements.players[0].start = false;
    elements.players[1].start = true;
    count = 1;
  } else {
    elements.board.classList.value = 'board circle active';

    elements.players[0].start = true;
    elements.players[1].start = false;
    count = 0;
  }

  console.log(count);
  elements.cells.forEach((cell) => {
    cell.classList.remove(cell.classList.contains('circle') ? 'circle' : 'x');
  });
  elements.board.classList.remove('inactive');
  elements.board.classList.add('active');
  elements.winningMessage.classList.remove('active');
  elements.winningMessage.classList.add('inactive');
  elements.playerTurn.turn = count;


  // elements.playerTurn.turn = 0;
  // elements.cells.forEach(elem => elem.addEventListener('click', (e) => { populateBoard(e, elements.playerTurn); }, { once: true }));
}


export default {
  populateBoard, validateUser, error, nextSlide, restartGame,
};