class Game {
  constructor(gameName) {
    this.gameName = gameName;
    this.API_URI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  }

  saveGame = async () => {
    const data = await fetch(this.API_URI, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name: this.gameName }),
    });
    return data;
  }

  getGameScores = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MhuKxqK5eTluMtdrkVY1/scores');
    const data = await response.json();
    return data.result;
  }
}

export default Game;