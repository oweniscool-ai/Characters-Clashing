export class ResultsSerializer {
  static buildMatchSummary(winnerId, scoreLedger, matchTimer, stageName) {
    const allStats = {};
    scoreLedger.stats.forEach((data, playerId) => {
      allStats[playerId] = {
        ...data,
        kdRatio: data.deaths > 0 ? (data.kills / data.deaths).toFixed(2) : data.kills.toFixed(2)
      };
    });

    return {
      timestamp: new Date().toISOString(),
      winnerId,
      stageName,
      timeElapsed: matchTimer.getFormattedTime(),
      playerStats: allStats
    };
  }
}
