const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const winningMessage = document.querySelector('.winning-message');
const restartButton = document.getElementById('restartButton');
const exitButton = document.getElementById('exitButton');
const playerTurn = { turn: 0 };
const arrows = document.querySelectorAll('.fa-arrow-down');
const form = document.getElementById('form');
const formInputs = form.querySelectorAll('input');
const players = [];
const winnerText = document.querySelectorAll('.winners .message');

export {
  board, cells, winningMessage, restartButton, playerTurn,
  exitButton, arrows, form, formInputs, players, winnerText,
};
