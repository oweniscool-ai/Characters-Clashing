export class ElectricArcVFX {
  static drawArc(ctx, x1, y1, x2, y2, segments = 5, color = '#00ffff') {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);

    let currX = x1;
    let currY = y1;
    const dx = (x2 - x1) / segments;
    const dy = (y2 - y1) / segments;

    for (let i = 1; i < segments; i++) {
      const offsetX = (Math.random() - 0.5) * 15;
      const offsetY = (Math.random() - 0.5) * 15;
      currX += dx + offsetX;
      currY += dy + offsetY;
      ctx.lineTo(currX, currY);
    }

    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }
}
