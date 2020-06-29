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


export default { populateBoard };