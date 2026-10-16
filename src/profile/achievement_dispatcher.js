export class AchievementDispatcher {
  constructor() {
    this.queue = [];
  }

  pushNotification(achievementTitle) {
    this.queue.push({ title: achievementTitle, timer: 180 });
  }

  updateAndPoll() {
    if (this.queue.length === 0) return null;
    const current = this.queue[0];
    current.timer--;
    if (current.timer <= 0) {
      return this.queue.shift();
    }
    return null;
  }
}

export const achievementDispatcher = new AchievementDispatcher();
