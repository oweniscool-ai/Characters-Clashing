export class MatchTimer {
  constructor(limitSeconds = 480) {
    this.limitFrames = limitSeconds * 60;
    this.remainingFrames = this.limitFrames;
    this.isTicking = false;
  }

  start() {
    this.isTicking = true;
  }

  pause() {
    this.isTicking = false;
  }

  reset(limitSeconds) {
    if (limitSeconds !== undefined) {
      this.limitFrames = limitSeconds * 60;
    }
    this.remainingFrames = this.limitFrames;
    this.isTicking = false;
  }

  update() {
    if (!this.isTicking || this.remainingFrames <= 0) return;
    this.remainingFrames--;
  }

  isTimeExpired() {
    return this.remainingFrames <= 0;
  }

  getFormattedTime() {
    const totalSecs = Math.ceil(this.remainingFrames / 60);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}
