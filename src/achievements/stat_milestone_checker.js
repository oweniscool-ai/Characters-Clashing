export class StatMilestoneChecker {
  static checkKOs(totalLifetimeKOs, achievementTracker) {
    if (totalLifetimeKOs === 100) {
      achievementTracker.increment('CENTURION_KOS', 1);
    }
  }
}
