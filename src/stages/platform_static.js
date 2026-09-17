export class StaticPlatform {
  constructor(x, y, width, height, isPassthrough = false) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isPassthrough = isPassthrough;
  }

  render(ctx) {
    ctx.fillStyle = this.isPassthrough ? '#888888' : '#444444';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
