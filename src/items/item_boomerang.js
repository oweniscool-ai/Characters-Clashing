import { ThrowableItem } from './item_throwable.js';

export class BoomerangItem extends ThrowableItem {
  constructor(x, y) {
    super('boomerang', 'Review Boomerang', x, y, 10);
    this.returning = false;
    this.thrower = null;
  }

  updateThrow(delta = 1) {
    if (!this.isHeld && this.thrower) {
      if (!this.returning) {
        this.x += this.vx * delta;
        if (Math.abs(this.x - this.thrower.x) > 350) {
          this.returning = true;
        }
      } else {
        const dx = this.thrower.x - this.x;
        this.vx = Math.sign(dx) * 12;
        this.x += this.vx * delta;
        if (Math.hypot(this.thrower.x - this.x, this.thrower.y - this.y) < 30) {
          return true; // Caught back
        }
      }
    }
    return false;
  }
}
