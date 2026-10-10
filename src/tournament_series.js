export class TournamentSeries {
  constructor(bestOf = 3, playerAId = 'P1', playerBId = 'P2') {
    this.targetWins = Math.ceil(bestOf / 2);
    this.scores = { [playerAId]: 0, [playerBId]: 0 };
    this.history = [];
  }

  recordGameWin(winnerId, stageId) {
    if (this.scores[winnerId] !== undefined) {
      this.scores[winnerId]++;
      this.history.push({ winnerId, stageId });
    }
  }

  getSeriesWinner() {
    for (const [playerId, wins] of Object.entries(this.scores)) {
      if (wins >= this.targetWins) {
        return playerId;
      }
    }
    return null;
  }

  isSeriesComplete() {
    return this.getSeriesWinner() !== null;
  }
}
