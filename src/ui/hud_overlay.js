export class HUDOverlay {
  constructor(canvasWidth, canvasHeight) {
    this.width = canvasWidth;
    this.height = canvasHeight;
  }

  render(ctx, players, stocksMap, percentagesMap) {
    ctx.save();
    players.forEach((player, index) => {
      const x = 150 + index * 320;
      const y = this.height - 80;

      // Card background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(x - 40, y - 40, 260, 90);

      // Fighter Name & Percent
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText(player.name, x, y - 15);

      const percent = percentagesMap.get(player.id) ?? 0;
      ctx.fillStyle = percent > 100 ? '#ff3333' : '#ffcc00';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(`${Math.floor(percent)}%`, x, y + 20);

      // Stocks display
      const stocks = stocksMap.get(player.id) ?? 3;
      ctx.fillStyle = '#00ffcc';
      ctx.font = '16px sans-serif';
      ctx.fillText(`STOCKS: ${stocks}`, x + 130, y + 20);
    });
    ctx.restore();
  }
}
