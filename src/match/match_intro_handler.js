export class MatchIntroHandler {
  constructor(stageName, players) {
    this.stageName = stageName;
    this.players = players;
    this.bannerAlpha = 0;
    this.bannerY = -100;
  }

  update() {
    this.bannerAlpha = Math.min(1, this.bannerAlpha + 0.05);
    this.bannerY = Math.min(100, this.bannerY + 10);
  }

  render(ctx) {
    ctx.save();
    ctx.globalAlpha = this.bannerAlpha;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, this.bannerY, 1280, 80);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`STAGE: ${this.stageName.toUpperCase()}`, 640, this.bannerY + 50);
    ctx.restore();
  }
}
