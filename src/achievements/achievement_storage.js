export class AchievementStorage {
  static save(tracker) {
    const data = {};
    tracker.achievements.forEach((ach, id) => {
      data[id] = { progress: ach.progress, isUnlocked: ach.isUnlocked };
    });
    localStorage.setItem('cc_achievements', JSON.stringify(data));
  }

  static load(tracker) {
    const raw = localStorage.getItem('cc_achievements');
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      Object.entries(data).forEach(([id, state]) => {
        const ach = tracker.getAchievement(id);
        if (ach) {
          ach.progress = state.progress;
          ach.isUnlocked = state.isUnlocked;
        }
      });
    } catch (e) {
      console.warn('Failed to load achievement save data', e);
    }
  }
}
