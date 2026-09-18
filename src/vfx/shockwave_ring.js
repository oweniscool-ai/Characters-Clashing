export class ShockwaveRingVFX {
  constructor(x, y, maxRadius = 100, expansionSpeed = 8, color = '#ffffff') {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.maxRadius = maxRadius;
    this.expansionSpeed = expansionSpeed;
    this.color = color;
  }

  update() {
    this.radius += this.expansionSpeed;
  }

  render(ctx) {
    if (this.isDead()) return;
    const progress = this.radius / this.maxRadius;
    const alpha = 1.0 - progress;

    ctx.save();
    ctx.globalAlpha = Math.max(0, alpha);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 4 * (1 - progress);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  isDead() {
    return this.radius >= this.maxRadius;
  }
}
