import { HazardBase } from './hazard_base.js';

export class AcidPoolHazard extends HazardBase {
  constructor(minY = 650, maxY = 450, speed = 0.5) {
    super(0, minY, 1280, 300, 2, 5);
    this.minY = minY;
    this.maxY = maxY;
    this.speed = speed;
    this.rising = true;
  }

  update() {
    if (this.rising) {
      this.y -= this.speed;
      if (this.y <= this.maxY) this.rising = false;
    } else {
      this.y += this.speed;
      if (this.y >= this.minY) this.rising = true;
    }
  }

  render(ctx) {
    ctx.fillStyle = 'rgba(57, 255, 20, 0.6)';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
