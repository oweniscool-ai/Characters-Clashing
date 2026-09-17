export class BouncyPlatform {
  constructor(x, y, width, height, bounceForce = 18) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.bounceForce = bounceForce;
  }

  bounce(fighter) {
    fighter.velocityY = -this.bounceForce;
  }

  render(ctx) {
    ctx.fillStyle = '#ff00aa';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
