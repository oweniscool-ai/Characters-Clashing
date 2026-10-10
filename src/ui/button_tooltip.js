export class ButtonTooltipUI {
  static renderTooltip(ctx, x, y, text) {
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(x, y, text.length * 8 + 20, 30);

    ctx.fillStyle = '#ffffff';
    ctx.font = '14px sans-serif';
    ctx.fillText(text, x + 10, y + 20);
    ctx.restore();
  }
}
