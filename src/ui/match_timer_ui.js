export class MatchTimerUI {
  render(ctx, timeString, width = 1280) {
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(width / 2 - 70, 15, 140, 50);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(timeString, width / 2, 48);
    ctx.restore();
  }
}
