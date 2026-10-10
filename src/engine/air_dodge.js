export class AirDodge {
  constructor() {
    this.isDodging = false;
    this.dodgeFrames = 20;
    this.timer = 0;
  }

  triggerDodge(vectorX, vectorY) {
    this.isDodging = true;
    this.timer = this.dodgeFrames;
    return { vx: vectorX * 10, vy: vectorY * 10 };
  }

  update() {
    if (this.isDodging) {
      this.timer--;
      if (this.timer <= 0) {
        this.isDodging = false;
      }
    }
  }
}
