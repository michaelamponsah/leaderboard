import './style.css';
import displayData from './modules/displayData.js';
import Game from './modules/Game.js';

const theReturnOfNero = new Game('The return of Nero');

window.onload = async () => {
  const data = await theReturnOfNero.getGameScores();
  displayData(data);
};

const refreshBtn = document.querySelector('[data-refresh]');
refreshBtn.addEventListener('click', async () => {
  const data = await theReturnOfNero.getGameScores();
  displayData(data);
});
