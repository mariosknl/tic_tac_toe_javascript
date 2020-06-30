/* eslint-disable import/extensions */

import check from './result.js';
import * as elements from './elements.js';

function togglePlayerSign() {
  elements.board.classList.toggle('x');
  elements.board.classList.toggle('circle');
}

const populateBoard = (e, move) => {
  e.target.classList.add(move.turn % 2 === 0 ? 'circle' : 'x');
  if (move.turn % 2 === 0) {
    console.log(elements.players[0]);
  } else {
    console.log(elements.players[1]);
  }
  check.result();
  move.turn += 1;
  togglePlayerSign();
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

function restartGame() {
  console.log('a');
  elements.cells.forEach((cell) => {
    cell.classList.remove(cell.classList.contains('circle') ? 'circle' : 'x');
  });
  elements.board.classList.remove('inactive');
  elements.board.classList.add('active');
  elements.winningMessage.classList.remove('active');
  elements.winningMessage.classList.add('inactive');
  elements.playerTurn.turn = 0;
  elements.cells.forEach(elem => elem.addEventListener('click', (e) => { populateBoard(e, elements.playerTurn); }, { once: true }));
  togglePlayerSign();


  // elements.playerTurn.turn = 0;
  // elements.cells.forEach(elem => elem.addEventListener('click', (e) => { populateBoard(e, elements.playerTurn); }, { once: true }));
}


export default {
  populateBoard, validateUser, error, nextSlide, restartGame,
};