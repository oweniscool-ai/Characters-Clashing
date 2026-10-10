export class ItemBase {
  constructor(id, name, x = 0, y = 0) {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.width = 30;
    this.height = 30;
    this.isHeld = false;
    this.holder = null;
    this.isGrounded = false;
  }

  update(delta = 1) {
    if (this.isHeld && this.holder) {
      this.x = this.holder.x + (this.holder.facingRight ? 20 : -20);
      this.y = this.holder.y + 10;
      return;
    }

    this.vy += 0.6 * delta; // Gravity
    this.x += this.vx * delta;
    this.y += this.vy * delta;
  }

  render(ctx) {
    if (this.isHeld) return;
    ctx.save();
    ctx.fillStyle = '#ff00ff';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
  }
}
