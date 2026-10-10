export class FrameData {
  constructor(startup, active, totalRecovery) {
    this.startup = startup;         // Frames before hit-boxes become active
    this.active = active;           // Frames hit-boxes remain active
    this.totalRecovery = totalRecovery; // Frames before fighter can act again
    this.currentFrame = 0;
    this.state = 'IDLE'; // IDLE, STARTUP, ACTIVE, RECOVERY
  }

  startMove() {
    this.currentFrame = 0;
    this.state = 'STARTUP';
  }

  update() {
    if (this.state === 'IDLE') return;

    this.currentFrame++;
    if (this.currentFrame <= this.startup) {
      this.state = 'STARTUP';
    } else if (this.currentFrame <= this.startup + this.active) {
      this.state = 'ACTIVE';
    } else if (this.currentFrame <= this.startup + this.active + this.totalRecovery) {
      this.state = 'RECOVERY';
    } else {
      this.state = 'IDLE';
      this.currentFrame = 0;
    }
  }

  isActiveHitboxFrame() {
    return this.state === 'ACTIVE';
  }

  isRecovering() {
    return this.state === 'RECOVERY';
  }

  isBusy() {
    return this.state !== 'IDLE';
  }
}
