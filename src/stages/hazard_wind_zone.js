export class WindZoneHazard {
  constructor(x, y, width, height, forceX = 1.5, forceY = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.forceX = forceX;
    this.forceY = forceY;
  }

  applyWind(fighter) {
    if (
      fighter.x < this.x + this.width &&
      fighter.x + fighter.width > this.x &&
      fighter.y < this.y + this.height &&
      fighter.y + fighter.height > this.y
    ) {
      fighter.x += this.forceX;
      fighter.y += this.forceY;
    }
  }

  render(ctx) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
