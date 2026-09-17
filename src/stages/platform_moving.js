export class MovingPlatform {
  constructor(x, y, width, height, pathPoints, speed = 2) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.pathPoints = pathPoints;
    this.speed = speed;
    this.targetIndex = 0;
  }

  update() {
    const target = this.pathPoints[this.targetIndex];
    const dx = target.x - this.x;
    const dy = target.y - this.y;
    const dist = Math.hypot(dx, dy);

    if (dist < this.speed) {
      this.x = target.x;
      this.y = target.y;
      this.targetIndex = (this.targetIndex + 1) % this.pathPoints.length;
    } else {
      this.x += (dx / dist) * this.speed;
      this.y += (dy / dist) * this.speed;
    }
  }

  render(ctx) {
    ctx.fillStyle = '#00aaff';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
