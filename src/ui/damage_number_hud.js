export class DamageNumberHUD {
  constructor(x, y, amount) {
    this.x = x;
    this.y = y;
    this.amount = amount;
    this.alpha = 1.0;
    this.vy = -1.5;
  }

  update() {
    this.y += this.vy;
    this.alpha -= 0.03;
  }

  render(ctx) {
    if (this.alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = '#ff3333';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText(`+${this.amount}`, this.x, this.y);
    ctx.restore();
  }
}
