export class SlashArcVFX {
  constructor(x, y, radius, startAngle, endAngle, color = '#ffffff', duration = 8) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.color = color;
    this.duration = duration;
    this.maxDuration = duration;
  }

  update() {
    this.duration--;
  }

  render(ctx) {
    if (this.duration <= 0) return;
    const alpha = this.duration / this.maxDuration;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
    ctx.stroke();
    ctx.restore();
  }

  isDead() {
    return this.duration <= 0;
  }
}
