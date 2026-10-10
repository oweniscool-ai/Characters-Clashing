export class AchievementPopupUI {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.timer = 180; // 3 seconds
  }

  update() {
    if (this.timer > 0) this.timer--;
  }

  render(ctx, width = 1280) {
    if (this.timer <= 0) return;
    ctx.save();
    ctx.fillStyle = 'rgba(20, 20, 30, 0.95)';
    ctx.strokeStyle = '#00ffcc';
    ctx.lineWidth = 2;
    ctx.fillRect(width - 350, 30, 320, 80);
    ctx.strokeRect(width - 350, 30, 320, 80);

    ctx.fillStyle = '#00ffcc';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('ACHIEVEMENT UNLOCKED!', width - 330, 58);

    ctx.fillStyle = '#ffffff';
    ctx.font = '14px sans-serif';
    ctx.fillText(this.title, width - 330, 82);
    ctx.restore();
  }
}
