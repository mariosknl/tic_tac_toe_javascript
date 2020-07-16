const { fn } = require('jquery');

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
              <h1 class="message">Player Something Won.</h1>
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

// form submition tests
test('test the player creation', () => {
  // add event linsterners
  const eL = require('../js/event_listeners');
  const $ = require('jquery');

  const elements = require('../js/elements');
  elements.arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      eL.default.formSubmit(
        arrow.previousElementSibling,
        arrow.parentElement,
        arrow.parentElement.nextElementSibling,
      );
    });
    document.querySelectorAll('input')[1].value = 'player1';
    $(elements.arrows[1]).click();
    document.querySelectorAll('input')[1].value = 'player2';
    $(elements.arrows[1]).click();
  });
  expect(elements.players[0].name).toBe('player1');
  expect(elements.players[1].name).toBe('player2');
});

// toggle player sign
test('toggle player signs', () => {
  const fn = require('../js/functions');
  const elements = require('../js/elements');
  fn.default.togglePlayerSign();
  expect(elements.board.classList.contains('x')).toBeTruthy();
});

// checking populateBoard
test('populate the board with signs', () => {
  const fn = require('../js/functions');
  const elements = require('../js/elements');
  const $ = require('jquery');
  const check = {
    result: jest.fn(),
  };
  elements.cells[0].addEventListener('click', (e) => {
    fn.default.populateBoard(e, elements.playerTurn, check);
  });
  $(elements.cells[0]).click();
  expect(elements.cells[0].classList.contains('circle')).toBeTruthy();
});

// validate user
test('validates user name length', () => {
  const player = { value: 'john' };
  const fn = require('../js/functions');
  expect(fn.default.validateUser(player)).toBeTruthy();
  // checks for inputs less than 3 characters
  player.value = 'a';
  expect(fn.default.validateUser(player)).toBe('');
});

// restart game function
test('restarts the game', () => {
  const fn = require('../js/functions');
  fn.default.restartGame();
  // check is the function runs
  expect(document.querySelector('.message').innerText).toBe('');
});

// exit game function
test('exits the game', () => {
  const fn = require('../js/functions');
  const elements = require('../js/elements');
  fn.default.exitGame();
  expect(elements.players.length).toBe(0);
});
