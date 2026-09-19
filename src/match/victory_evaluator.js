export class VictoryEvaluator {
  static checkWinner(stockTracker, matchTimer) {
    const remainingIds = stockTracker.getRemainingPlayerIds();

    // Condition 1: Last player standing in Stock mode
    if (remainingIds.length === 1) {
      return { hasWinner: true, winnerId: remainingIds[0], reason: 'LAST_STANDING' };
    }

    // Condition 2: Time expired
    if (matchTimer.isTimeExpired()) {
      if (remainingIds.length === 0) {
        return { hasWinner: false, winnerId: null, reason: 'TIE_NO_STOCKS' };
      }
      return { hasWinner: false, winnerId: null, reason: 'TIME_EXPIRED', tiedIds: remainingIds };
    }

    return { hasWinner: false, winnerId: null, reason: 'IN_PROGRESS' };
  }
}
