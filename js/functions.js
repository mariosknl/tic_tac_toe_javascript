import check from './result.js';

const populateBoard = (e, move) => {
  e.target.classList.add(move.turn % 2 === 0 ? 'circle' : 'x');
  check.result();
  move.turn += 1;
};

export default { populateBoard };