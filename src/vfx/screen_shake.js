export class ScreenShake {
  constructor() {
    this.intensity = 0;
    this.duration = 0;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  shake(intensity = 10, duration = 15) {
    this.intensity = intensity;
    this.duration = duration;
  }

  update() {
    if (this.duration > 0) {
      this.duration--;
      this.offsetX = (Math.random() * 2 - 1) * this.intensity;
      this.offsetY = (Math.random() * 2 - 1) * this.intensity;
    } else {
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }

  apply(ctx) {
    ctx.translate(this.offsetX, this.offsetY);
  }
}

export const screenShake = new ScreenShake();
