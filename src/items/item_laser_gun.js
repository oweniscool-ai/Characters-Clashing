import { ThrowableItem } from './item_throwable.js';

export class LaserGunItem extends ThrowableItem {
  constructor(x, y) {
    super('laser_gun', 'Laser Blaster', x, y, 8);
    this.ammo = 5;
  }

  fire(direction) {
    if (this.ammo <= 0) return null;
    this.ammo--;
    return {
      x: this.x + (direction > 0 ? this.width : -20),
      y: this.y + 10,
      vx: direction * 20,
      vy: 0,
      damage: 10
    };
  }
}
