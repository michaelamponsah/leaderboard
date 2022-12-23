import './style.css';
import displayData from './modules/displayData.js';
import Game from './modules/Game.js';

const theReturnOfNero = new Game('The return of Nero');

window.onload = async () => {
  const data = await theReturnOfNero.getGameScoresAsync();
  displayData(data);
};

const refreshBtn = document.querySelector('[data-refresh]');
refreshBtn.addEventListener('click', async () => {
  const data = await theReturnOfNero.getGameScoresAsync();
  displayData(data);
});

let userData = {
  user: '',
  score: '',
};

const playerName = document.querySelector('[data-player-name]');
const playerScore = document.querySelector('[data-player-score]');

playerName.addEventListener('input', (e) => {
  const playerName = e.target.value.trim();
  userData = {
    ...userData,
    user: playerName,
  };
});
playerScore.addEventListener('input', (e) => {
  const playerScore = e.target.value.trim();
  userData = {
    ...userData,
    score: playerScore,
  };
});

const scoreForm = document.querySelector('[data-score-form]');
const uri = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MhuKxqK5eTluMtdrkVY1/scores';
scoreForm.setAttribute('action', uri);

scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  theReturnOfNero.savePlayerDataAsync(uri, userData);
  scoreForm.reset();
});