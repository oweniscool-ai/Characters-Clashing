export class DailyChallenges {
  constructor() {
    this.challenges = [
      { id: 'daily_1', task: 'Win 2 matches in online arena', progress: 0, max: 2, completed: false, xpReward: 150 },
      { id: 'daily_2', task: 'Land 10 smash attacks', progress: 0, max: 10, completed: false, xpReward: 100 }
    ];
  }

  progressChallenge(id, amount = 1) {
    const ch = this.challenges.find(c => c.id === id);
    if (ch && !ch.completed) {
      ch.progress = Math.min(ch.max, ch.progress + amount);
      if (ch.progress >= ch.max) {
        ch.completed = true;
        return true;
      }
    }
    return false;
  }
}
