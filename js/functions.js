const populateBoard = (e, move) => {
  e.target.classList.add(move.turn % 2 === 0 ? 'circle' : 'x');

  move.turn += 1;
};

export default { populateBoard };