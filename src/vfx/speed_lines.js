export class SpeedLinesVFX {
  constructor() {
    this.active = false;
    this.duration = 0;
  }

  trigger(duration = 20) {
    this.active = true;
    this.duration = duration;
  }

  update() {
    if (this.duration > 0) {
      this.duration--;
    } else {
      this.active = false;
    }
  }

  render(ctx, width = 1280, height = 720) {
    if (!this.active) return;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 3;

    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2 + Math.random() * 0.1;
      const innerR = 200 + Math.random() * 50;
      const outerR = 800;

      const x1 = centerX + Math.cos(angle) * innerR;
      const y1 = centerY + Math.sin(angle) * innerR;
      const x2 = centerX + Math.cos(angle) * outerR;
      const y2 = centerY + Math.sin(angle) * outerR;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    ctx.restore();
  }
}
