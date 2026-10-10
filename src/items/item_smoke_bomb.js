import { ThrowableItem } from './item_throwable.js';

export class SmokeBombItem extends ThrowableItem {
  constructor(x, y) {
    super('smoke', 'Smoke Bomb', x, y, 2);
  }

  explode() {
    return {
      x: this.x,
      y: this.y,
      radius: 120,
      duration: 300
    };
  }
}
