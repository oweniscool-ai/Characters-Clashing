export class SuddenDeathResolver {
  static determineTiebreakers(scoreLedger, remainingPlayerIds) {
    // If time expires, the player with the lowest damage wins
    // If damage is identical, evaluate highest total match kills
    return [...remainingPlayerIds].sort((a, b) => {
      const statsA = scoreLedger.getStats(a);
      const statsB = scoreLedger.getStats(b);

      if (statsA.damageTaken !== statsB.damageTaken) {
        return statsA.damageTaken - statsB.damageTaken; // Less damage taken ranks higher
      }
      return statsB.kills - statsA.kills; // More kills ranks higher
    });
  }

  static configureSuddenDeath(stockTracker, damageTracker, tiedPlayerIds) {
    tiedPlayerIds.forEach(id => {
      stockTracker.stocks.set(id, 1);
      damageTracker.percentages.set(id, 300); // 300% starting damage for sudden death
    });
  }
}
