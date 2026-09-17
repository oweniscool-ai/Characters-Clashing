export class CrumblingPlatform {
  constructor(x, y, width, height, resetTime = 300) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.resetTime = resetTime;
    this.timer = 0;
    this.isBroken = false;
  }

  steppedOn() {
    if (!this.isBroken && this.timer === 0) {
      this.timer = 60; // 1 second shake before falling
    }
  }

  update() {
    if (this.timer > 0) {
      this.timer--;
      if (this.timer === 0 && !this.isBroken) {
        this.isBroken = true;
        this.timer = this.resetTime;
      } else if (this.timer === 0 && this.isBroken) {
        this.isBroken = false;
      }
    }
  }

  render(ctx) {
    if (this.isBroken) return;
    ctx.fillStyle = this.timer > 0 ? '#ff4400' : '#8b5a2b';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
