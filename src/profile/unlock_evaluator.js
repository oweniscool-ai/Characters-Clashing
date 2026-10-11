export class UnlockEvaluator {
  static evaluateMatchEnd(playerStats, achievementTracker) {
    if (playerStats.matchesPlayed === 1) {
      achievementTracker.increment('FIRST_CLASH', 1);
    }
    if (playerStats.charId === 'karen' && playerStats.won) {
      achievementTracker.increment('KAREN_QUENCHER', 1);
    }
    if (playerStats.damageTaken >= 300 && playerStats.won) {
      achievementTracker.increment('SERVER_MELTDOWN', 1);
    }
  }
}
