// Selects the home score, guest score, and all buttons.
let homeScore = document.getElementById('home');
let guestScore = document.getElementById('guest');
let button = document.getElementsByClassName('button');

// Set the scores to 0.
let home = 0;
let guest = 0;

// Selects the title.
const title = document.getElementById('title');

// Sets the home teams score to green and guest teams score to red.
homeScore.style.color = 'green';
guestScore.style.color = 'red';

// Buttons disabled until start game is clicked
function disableButtons() {
  for (let i = 0; i < button.length; i++) {
    button[i].disabled = true;
  }
}
disableButtons();

// Buttons enabled when start game is clicked
function activateButtons() {
  for (let i = 0; i < button.length; i++) {
    button[i].disabled = false;
  }
}
disableButtons();

// Home add buttons
function addHomeOne() {
  home += 1;
  homeScore.innerText = home;
}
function addHomeTwo() {
  home += 2;
  homeScore.innerText = home;
}
function addHomeThree() {
  home += 3;
  homeScore.innerText = home;
}

// Guest add buttons
function addGuestOne() {
  guest += 1;
  guestScore.innerText = guest;
}
function addGuestTwo() {
  guest += 2;
  guestScore.innerText = guest;
}
function addGuestThree() {
  guest += 3;
  guestScore.innerText = guest;
}

// Starts the game by activating the buttons when clicked.
function start() {
  activateButtons();
}

// Resets the game by resetting the scores when clicked.
document.getElementById('reset-game-btn').addEventListener('click', () => {
  homeScore.innerText = 0;
  home = 0;
  guestScore.innerText = 0;
  guest = 0;
});
