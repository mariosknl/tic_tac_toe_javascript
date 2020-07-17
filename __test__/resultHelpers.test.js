/* eslint-disable global-require */
beforeEach(() => {
  document.body.innerHTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <script
        src="https://kit.fontawesome.com/526bcd4356.js"
        crossorigin="anonymous"
      ></script>
      <title>Document</title>
    </head>
    <body>
      <form id="form">
        <div class="field-name active">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Player1 Username" required />
          <i class="fas fa-arrow-down"></i>
        </div>
        <div class="field-name inactive">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Player2 Username" required />
          <i class="fas fa-arrow-down"></i>
        </div>
        <div class="board circle inactive" id="board">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
      </form>
      <div class="winning-message inactive" id="winningMessage">
        <div class="container">
          <div class="btn-container">
            <button id="restartButton">RESTART!</button>
          </div>
          <div class="img-container">
            <img src="./images/undraw_winners_ao2o.svg" />
            <div class="winners">
              <h1 class="message">Player Something.</h1>
              <h6 class="message">Player one victories</h6>
              <h6 class="message">Player two victories</h6>
            </div>
          </div>
          <div class="btn-container">
            <button id="exitButton">EXIT</button>
          </div>
        </div>
      </div>
      <script src="./js/main.js" type="module"></script>
    </body>
  </html>
  `;
});

// test the win function
test('test the win function', () => {
  const elements = require('../js/elements');
  const result = require('../js/result');
  result.default.win(true);
  expect(elements.board.classList.contains('inactive')).toBeTruthy();
});
// check test function
test('test if helper checks the win', () => {
  const result = [];
  const array = Array.from(document.querySelectorAll('.cell'));
  const result2 = require('../js/result');
  result2.default.test(result, array, 0, 1, 2);
  expect(result).not.toBe([]);
});

// test for winner function
test('update the stats for winner', () => {
  const elements = require('../js/elements');
  const result = require('../js/result');
  const newPlayer = require('../js/player');
  const player1 = newPlayer.default.newPlayer('john', 'x');
  const player2 = newPlayer.default.newPlayer('maria', 'circle');
  elements.playerTurn.turn = 2;
  result.default.winner(player1, player2);
  expect(player1.gamesWon).toBe(1);
});