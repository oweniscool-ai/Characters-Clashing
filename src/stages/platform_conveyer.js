export class ConveyorPlatform {
  constructor(x, y, width, height, pushSpeed = 3) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.pushSpeed = pushSpeed; // positive = right, negative = left
  }

  applyForce(fighter) {
    fighter.x += this.pushSpeed;
  }

  render(ctx) {
    ctx.fillStyle = '#ffcc00';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
