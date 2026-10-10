import { ItemBase } from './item_base.js';

export class ExplosiveMineItem extends ItemBase {
  constructor(x, y) {
    super('mine', 'Explosive Mine', x, y);
    this.armed = false;
    this.armTimer = 60; // 1 second to arm
  }

  update(delta = 1) {
    super.update(delta);
    if (!this.armed && this.armTimer > 0) {
      this.armTimer -= delta;
      if (this.armTimer <= 0) this.armed = true;
    }
  }

  checkTrigger(fighter) {
    if (!this.armed) return false;
    const dist = Math.hypot((fighter.x + fighter.width / 2) - (this.x + this.width / 2), (fighter.y + fighter.height / 2) - (this.y + this.height / 2));
    return dist < 35;
  }
}
