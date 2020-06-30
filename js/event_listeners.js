/* eslint-disable import/extensions */

import * as elements from './elements.js';
import functions from './functions.js';
import create from './player.js';

const formSubmit = (input, parent, nextForm) => {
  // const input = arrow.previousElementSibling;
  // const nextForm = arrow.parentElement.nextElementSibling;

  if (input.type === 'text' && functions.validateUser(input)) {
    functions.nextSlide(parent, nextForm);
    if (elements.players.length === 0) {
      const player = create.newPlayer(input.value, 'circle');
      elements.players.push(player);
    } else {
      const player = create.newPlayer(input.value, 'x');
      elements.players.push(player);
    }
  } else {
    parent.style.animation = 'shake 0.5s ease';
  }
  if (elements.players.length === 2) {
    elements.players[0].start = true;
  }
};

const implement = () => {
  elements.restartButton.addEventListener('click', functions.restartGame);
  elements.exitButton.addEventListener('click', functions.exitGame);

  elements.cells.forEach(elem => elem.addEventListener('click', (e) => { functions.populateBoard(e, elements.playerTurn); }));

  elements.formInputs.forEach((input) => {
    input.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        formSubmit(e.target, e.target.parentElement, e.target.parentElement.nextElementSibling);
      }
    });
  });

  elements.arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      formSubmit(arrow.previousElementSibling, arrow.parentElement,
        arrow.parentElement.nextElementSibling);
    });
  });
};


export default { implement };