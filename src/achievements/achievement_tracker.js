import { ACHIEVEMENT_MANIFEST } from './achievement_registry.js';
import { AchievementBase } from './achievement_base.js';

export class AchievementTracker {
  constructor() {
    this.achievements = new Map();
    this.init();
  }

  init() {
    Object.values(ACHIEVEMENT_MANIFEST).forEach(data => {
      const ach = new AchievementBase(data.id, data.title, data.description, data.xp);
      ach.maxProgress = data.maxProgress;
      this.achievements.set(data.id, ach);
    });
  }

  increment(id, amount = 1) {
    const ach = this.achievements.get(id);
    if (ach && !ach.isUnlocked) {
      return ach.updateProgress(amount);
    }
    return false;
  }

  getAchievement(id) {
    return this.achievements.get(id);
  }
}

export const achievementTracker = new AchievementTracker();
