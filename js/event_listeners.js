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
};

const implement = () => {
  elements.restartButton.addEventListener('click', functions.restartGame);

  elements.cells.forEach(elem => elem.addEventListener('click', (e) => { functions.populateBoard(e, elements.playerTurn); }, { once: true }));

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


// elements.arrows.forEach((arrow) => {
//   arrow.addEventListener('click', () => {
//     const input = arrow.previousElementSibling;
//     const parent = arrow.parentElement;
//     const nextForm = arrow.parentElement.nextElementSibling;

//     if (input.type === 'text' && functions.validateUser(input)) {
//       functions.nextSlide(parent, nextForm);
//     } else {
//       parent.style.animation = 'shake 0.5s ease';
//     }
//   });
// });
