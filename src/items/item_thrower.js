import { ItemBase } from './item_base.js';

export class ThrowableItem extends ItemBase {
  constructor(id, name, x, y, damage = 12) {
    super(id, name, x, y);
    this.damage = damage;
  }

  throwItem(direction, powerMultiplier = 1.0) {
    if (!this.isHeld) return;
    this.isHeld = false;
    this.holder = null;
    this.vx = direction * 15 * powerMultiplier;
    this.vy = -6 * powerMultiplier;
  }

  checkHit(fighter) {
    if (this.isHeld) return false;
    return (
      this.x < fighter.x + fighter.width &&
      this.x + this.width > fighter.x &&
      this.y < fighter.y + fighter.height &&
      this.y + this.height > fighter.y
    );
  }
}
