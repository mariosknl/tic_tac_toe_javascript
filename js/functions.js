import check from './result.js';
import * as elements from './elements.js';

function togglePlayerSign() {
  elements.board.classList.toggle('x');
  elements.board.classList.toggle('circle');
}

const populateBoard = (e, move) => {
  e.target.classList.add(move.turn % 2 === 0 ? 'circle' : 'x');
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


export default {
  populateBoard, validateUser, error, nextSlide,
};