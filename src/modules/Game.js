class Game {
  constructor(gameName) {
    this.gameName = gameName;
    this.API_URI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  }

  createGameAsync = async () => {
    const data = await fetch(this.API_URI, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name: this.gameName }),
    });
    return data.json();
  }

  getGameScoresAsync = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MhuKxqK5eTluMtdrkVY1/scores');
    const data = await response.json();
    return data.result;
  }

  savePlayerDataAsync = async (uri, userData) => {
    const data = await fetch(uri, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return data;
  }
}

export default Game;