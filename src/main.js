/* eslint-disable import/extensions */
/* eslint-disable no-alert */
import * as elements from './elements.js';
import create from './player.js';
import eventListeners from './event_listeners.js';

console.log(elements.form);
const playerOne = create.newPlayer('Messi', 'X', 0, 0);
eventListeners.implement();
console.log(elements.cells);