/* eslint-disable import/extensions */

import * as elements from './elements.js';
import functions from './functions.js';

const implement = () => {
  elements.cells.forEach(elem => elem.addEventListener('click', (e) => { functions.populateBoard(e, elements.playerTurn); }, { once: true }));
};

export default { implement };