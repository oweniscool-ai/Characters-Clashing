export class CountdownUI {
  render(ctx, text, width = 1280, height = 720) {
    if (!text) return;
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#00ffcc';
    ctx.font = 'bold 80px sans-serif';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#000000';
    ctx.shadowBlur = 15;
    ctx.fillText(text, width / 2, height / 2 + 20);
    ctx.restore();
  }
}
