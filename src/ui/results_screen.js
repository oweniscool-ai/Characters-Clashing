export class ResultsScreenUI {
  constructor(matchSummary) {
    this.summary = matchSummary;
  }

  render(ctx, width = 1280, height = 720) {
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 40px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('MATCH RESULTS', width / 2, 100);

    ctx.font = '24px sans-serif';
    ctx.fillStyle = '#00ffcc';
    ctx.fillText(`Winner: Player ${this.summary.winnerId}`, width / 2, 160);

    let yOffset = 230;
    Object.entries(this.summary.playerStats).forEach(([id, stats]) => {
      ctx.fillStyle = '#ffffff';
      ctx.font = '18px monospace';
      ctx.fillText(`Player ${id} -> Kills: ${stats.kills} | Deaths: ${stats.deaths} | Damage Dealt: ${Math.floor(stats.damageDealt)}`, width / 2, yOffset);
      yOffset += 40;
    });

    ctx.restore();
  }
}
