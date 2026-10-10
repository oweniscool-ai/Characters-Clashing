export class StageBannerUI {
  constructor(stageName) {
    this.stageName = stageName;
    this.timer = 120; // 2 seconds display
  }

  update() {
    if (this.timer > 0) this.timer--;
  }

  render(ctx, width = 1280) {
    if (this.timer <= 0) return;
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 100, width, 60);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`ARENA: ${this.stageName.toUpperCase()}`, width / 2, 138);
    ctx.restore();
  }
}
