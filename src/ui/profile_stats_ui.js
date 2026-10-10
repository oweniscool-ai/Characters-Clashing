export class ProfileStatsUI {
  constructor(stats) {
    this.stats = stats;
  }

  render(ctx, width = 1280, height = 720) {
    ctx.save();
    ctx.fillStyle = '#111116';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PLAYER CAREER STATS', width / 2, 100);

    ctx.font = '20px sans-serif';
    ctx.fillStyle = '#00ffcc';
    ctx.fillText(`Total Matches Played: ${this.stats.matchesPlayed ?? 0}`, width / 2, 200);
    ctx.fillText(`Total Victories: ${this.stats.wins ?? 0}`, width / 2, 250);
    ctx.fillText(`Total KOs: ${this.stats.totalKOs ?? 0}`, width / 2, 300);

    ctx.restore();
  }
}
