export class HazardBase {
  constructor(x, y, width, height, damage, knockback) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.damage = damage;
    this.knockback = knockback;
  }

  checkHit(fighter) {
    return (
      fighter.x < this.x + this.width &&
      fighter.x + fighter.width > this.x &&
      fighter.y < this.y + this.height &&
      fighter.y + fighter.height > this.y
    );
  }
}
