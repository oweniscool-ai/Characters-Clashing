export class MilestoneCalculator {
  static getPercentage(current, max) {
    if (max <= 0) return 100;
    return Math.min(100, Math.floor((current / max) * 100));
  }
}
