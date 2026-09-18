export class ShieldBubbleVFX {
  constructor(fighter) {
    this.fighter = fighter;
    this.pulse = 0;
  }

  render(ctx) {
    if (!this.fighter.isShielding) return;
    this.pulse += 0.1;
    const radius = (this.fighter.width / 2) + 12 + Math.sin(this.pulse) * 2;
    const centerX = this.fighter.x + this.fighter.width / 2;
    const centerY = this.fighter.y + this.fighter.height / 2;

    ctx.save();
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = '#00e1ff';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}
