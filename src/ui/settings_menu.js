export class SettingsMenuUI {
  constructor() {
    this.options = ['MASTER VOLUME', 'MUSIC VOLUME', 'SFX VOLUME', 'SCREEN SHAKE: ON', 'BACK TO MAIN MENU'];
    this.selectedIndex = 0;
  }

  render(ctx, width = 1280, height = 720) {
    ctx.save();
    ctx.fillStyle = '#141418';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GAME SETTINGS', width / 2, 100);

    this.options.forEach((opt, index) => {
      ctx.fillStyle = index === this.selectedIndex ? '#00ffcc' : '#aaaaaa';
      ctx.font = '20px sans-serif';
      ctx.fillText(opt, width / 2, 220 + index * 60);
    });

    ctx.restore();
  }
}
