export class PauseMenuUI {
  constructor() {
    this.options = ['RESUME MATCH', 'RESTART MATCH', 'QUIT TO MENU'];
    this.selectedIndex = 0;
  }

  render(ctx, width = 1280, height = 720) {
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GAME PAUSED', width / 2, 220);

    this.options.forEach((opt, index) => {
      ctx.fillStyle = index === this.selectedIndex ? '#00ffcc' : '#ffffff';
      ctx.font = '22px sans-serif';
      ctx.fillText(opt, width / 2, 300 + index * 50);
    });

    ctx.restore();
  }
}
