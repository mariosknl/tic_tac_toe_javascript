const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const winningMessage = document.querySelectorAll('.winningMessage');
const restartButton = document.getElementById('restartButton');
const exitButton = document.getElementById('exitButton');
const playerTurn = { turn: 0 };

export {
  board, cells, winningMessage, restartButton, playerTurn, exitButton,
};