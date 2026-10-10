export class TitleScreenUI {
  constructor() {
    this.menuOptions = ['OFFLINE PLAY', 'ONLINE ARENA', 'TRAINING LAB', 'SETTINGS', 'ADMIN DASHBOARD'];
    this.selectedIndex = 0;
    this.pulse = 0;
  }

  update() {
    this.pulse += 0.05;
  }

  render(ctx, width = 1280, height = 720) {
    ctx.save();
    ctx.fillStyle = '#0c0c12';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#ff00aa';
    ctx.font = 'bold 54px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CHARACTERS CLASHING', width / 2, 200);

    this.menuOptions.forEach((opt, i) => {
      const isSelected = i === this.selectedIndex;
      ctx.fillStyle = isSelected ? '#00ffcc' : '#ffffff';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText(opt, width / 2, 340 + i * 50);
    });

    ctx.restore();
  }
}
