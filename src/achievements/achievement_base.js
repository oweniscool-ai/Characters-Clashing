export class AchievementBase {
  constructor(id, title, description, rewardXP = 100) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.rewardXP = rewardXP;
    this.isUnlocked = false;
    this.progress = 0;
    this.maxProgress = 1;
  }

  updateProgress(amount) {
    if (this.isUnlocked) return false;
    this.progress = Math.min(this.maxProgress, this.progress + amount);
    if (this.progress >= this.maxProgress) {
      this.isUnlocked = true;
      return true; // Newly unlocked
    }
    return false;
  }
}
