import { HazardBase } from './hazard_base.js';

export class SpikeHazard extends HazardBase {
  constructor(x, y, width, height) {
    super(x, y, width, height, 15, 12);
  }

  render(ctx) {
    ctx.fillStyle = '#e60000';
    ctx.beginPath();
    ctx.moveTo(this.x, this.y + this.height);
    ctx.lineTo(this.x + this.width / 2, this.y);
    ctx.lineTo(this.x + this.width, this.y + this.height);
    ctx.closePath();
    ctx.fill();
  }
}
