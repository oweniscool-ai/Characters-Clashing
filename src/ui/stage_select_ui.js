export class StageSelectUI {
  constructor(stagesList) {
    this.stages = stagesList;
    this.cursorIndex = 0;
  }

  render(ctx, width = 1280, height = 720) {
    ctx.save();
    ctx.fillStyle = '#18111e';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SELECT STAGE ARENA', width / 2, 80);

    const startX = 250;
    const startY = 200;
    const boxWidth = 240;
    const boxHeight = 140;

    this.stages.forEach((stage, i) => {
      const x = startX + (i % 3) * (boxWidth + 30);
      const y = startY + Math.floor(i / 3) * (boxHeight + 30);

      const isSelected = i === this.cursorIndex;
      ctx.fillStyle = isSelected ? '#ff00aa' : '#332233';
      ctx.strokeStyle = isSelected ? '#ffffff' : '#664466';
      ctx.lineWidth = isSelected ? 4 : 2;

      ctx.fillRect(x, y, boxWidth, boxHeight);
      ctx.strokeRect(x, y, boxWidth, boxHeight);

      ctx.fillStyle = '#ffffff';
      ctx.font = '18px sans-serif';
      ctx.fillText(stage.name, x + boxWidth / 2, y + boxHeight / 2);
    });

    ctx.restore();
  }
}
