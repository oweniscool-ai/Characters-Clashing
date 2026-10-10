export class TechRecovery {
  constructor() {
    this.techWindowFrames = 14;
    this.timer = 0;
  }

  armTechWindow() {
    this.timer = this.techWindowFrames;
  }

  update() {
    if (this.timer > 0) this.timer--;
  }

  attemptTech(shieldInputPressed) {
    if (this.timer > 0 && shieldInputPressed) {
      this.timer = 0;
      return true; // Successfully teched off ground/wall
    }
    return false;
  }
}
