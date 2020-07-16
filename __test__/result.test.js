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

test('check the rows for a winner', () => {
  const result = require('../js/result');
  document.getElementById('board').innerHTML = `        <div class="board circle inactive" id="board">
  <div class="cell x"></div>
  <div class="cell x"></div>
  <div class="cell x"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>`;
  const array = Array.from(document.querySelectorAll('.cell'));
  expect(result.default.checkRow('x', 0, array, true)).toBeTruthy();
});

test('check the rows for not a winner', () => {
  const result = require('../js/result');
  document.getElementById('board').innerHTML = `        <div class="board circle inactive" id="board">
  <div class="cell x"></div>
  <div class="cell x"></div>
  <div class="cell circle"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>`;
  const array = Array.from(document.querySelectorAll('.cell'));
  expect(result.default.checkRow('x', 0, array, true)).toBeFalsy();
});

test('check the columns for a winner', () => {
  const result = require('../js/result');
  document.getElementById('board').innerHTML = `        <div class="board circle inactive" id="board">
  <div class="cell x"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell x"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell x"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>`;
  const array = Array.from(document.querySelectorAll('.cell'));
  expect(result.default.checkColumn('x', 0, array, true)).toBeTruthy();
});

test('check the columns for not a winner', () => {
  const result = require('../js/result');
  document.getElementById('board').innerHTML = `        <div class="board circle inactive" id="board">
  <div class="cell x"></div>
  <div class="cell"></div>
  <div class="cell circle"></div>
  <div class="cell circle"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell x"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>`;
  const array = Array.from(document.querySelectorAll('.cell'));
  expect(result.default.checkColumn('x', 0, array, true)).toBeFalsy();
});

test('check the diagonal one for a winner', () => {
  const result = require('../js/result');
  document.getElementById('board').innerHTML = `        <div class="board circle inactive" id="board">
  <div class="cell x"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell x"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell x"></div>
</div>`;
  const array = Array.from(document.querySelectorAll('.cell'));
  expect(result.default.checkDiagonal('x', 0, array, true)).toBeTruthy();
});

test('check the diagonal two for a winner', () => {
  const result = require('../js/result');
  document.getElementById('board').innerHTML = `        <div class="board circle inactive" id="board">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell x"></div>
  <div class="cell circle"></div>
  <div class="cell x"></div>
  <div class="cell"></div>
  <div class="cell x"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>`;
  const array = Array.from(document.querySelectorAll('.cell'));
  expect(result.default.checkDiagonal('x', 2, array, true)).toBeTruthy();
});

test('check if the game is drawn', () => {
  const result = require('../js/result');
  document.getElementById('board').innerHTML = `        <div class="board circle inactive" id="board">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell x"></div>
  <div class="cell circle"></div>
  <div class="cell x"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>`;
  const elements = require('../js/elements');

  result.default.result(9);
  expect(elements.board.classList.contains('inactive')).toBeTruthy();
});