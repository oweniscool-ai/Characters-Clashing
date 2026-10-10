export class ComboCounterUI {
  constructor() {
    this.hits = 0;
    this.damageTotal = 0;
    this.timer = 0;
  }

  registerHit(damage) {
    this.hits++;
    this.damageTotal += damage;
    this.timer = 90; // 1.5 seconds decay timer
  }

  update() {
    if (this.timer > 0) {
      this.timer--;
      if (this.timer === 0) {
        this.hits = 0;
        this.damageTotal = 0;
      }
    }
  }

  render(ctx, width = 1280, height = 720) {
    if (this.hits <= 1) return;
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(width - 320, 100, 280, 90);

    ctx.fillStyle = '#ffcc00';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`${this.hits} HITS COMBO!`, width - 50, 135);

    ctx.fillStyle = '#ffffff';
    ctx.font = '16px sans-serif';
    ctx.fillText(`${Math.floor(this.damageTotal)}% Total Damage`, width - 50, 165);

    ctx.restore();
  }
}
