/* eslint-disable import/extensions */

import * as elements from './elements.js';
import functions from './functions.js';


const implement = () => {
  elements.cells.forEach(elem => elem.addEventListener('click', (e) => { functions.populateBoard(e, elements.playerTurn); }, { once: true }));


  elements.arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = arrow.parentElement.nextElementSibling;

      if (input.type === 'text' && functions.validateUser(input)) {
        functions.nextSlide(parent, nextForm);
      } else {
        parent.style.animation = 'shake 0.5s ease';
      }
    });
  });
};

export default { implement };