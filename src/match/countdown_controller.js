export class CountdownController {
  constructor(ticks = 3) {
    this.initialTicks = ticks;
    this.currentTick = ticks;
    this.framesPerTick = 60; // 1 second per tick
    this.frameCounter = 0;
    this.isFinished = false;
  }

  reset() {
    this.currentTick = this.initialTicks;
    this.frameCounter = 0;
    this.isFinished = false;
  }

  update() {
    if (this.isFinished) return;

    this.frameCounter++;
    if (this.frameCounter >= this.framesPerTick) {
      this.frameCounter = 0;
      this.currentTick--;
      if (this.currentTick < 0) {
        this.isFinished = true;
      }
    }
  }

  getDisplayText() {
    if (this.currentTick > 0) return `${this.currentTick}`;
    if (this.currentTick === 0) return 'CLASH!';
    return '';
  }
}
