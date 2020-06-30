function newPlayer(name, symbol = '', gamesPlayed = 0, gamesWon = 0) {
  return {
    name,
    gamesPlayed,
    gamesWon,
    winner: false,
    symbol,
  };
}

export default { newPlayer };