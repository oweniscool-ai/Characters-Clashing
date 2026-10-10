export class CharacterSelectUI {
  constructor(roster) {
    this.roster = roster;
    this.cursorIndex = 0;
  }

  render(ctx, width = 1280, height = 720) {
    ctx.save();
    ctx.fillStyle = '#111118';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CHOOSE YOUR FIGHTER', width / 2, 80);

    const cols = 6;
    const startX = 200;
    const startY = 160;
    const cellWidth = 140;
    const cellHeight = 100;

    this.roster.forEach((fighter, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = startX + col * (cellWidth + 15);
      const y = startY + row * (cellHeight + 15);

      const isSelected = i === this.cursorIndex;
      ctx.fillStyle = isSelected ? '#00ffcc' : '#222233';
      ctx.strokeStyle = isSelected ? '#ffffff' : '#444455';
      ctx.lineWidth = isSelected ? 4 : 2;

      ctx.fillRect(x, y, cellWidth, cellHeight);
      ctx.strokeRect(x, y, cellWidth, cellHeight);

      ctx.fillStyle = isSelected ? '#000000' : '#ffffff';
      ctx.font = '14px sans-serif';
      ctx.fillText(fighter.name, x + cellWidth / 2, y + cellHeight / 2);
    });

    ctx.restore();
  }
}
