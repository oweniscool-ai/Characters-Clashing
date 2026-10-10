import { HealingFoodItem } from './item_food.js';
import { ExplosiveMineItem } from './item_mine.js';
import { LaserGunItem } from './item_laser_gun.js';
import { InvincibilityStarItem } from './item_star.js';

export class ItemFactory {
  static createRandomItem(x, y) {
    const roll = Math.random();
    if (roll < 0.3) return new HealingFoodItem(x, y);
    if (roll < 0.6) return new ExplosiveMineItem(x, y);
    if (roll < 0.85) return new LaserGunItem(x, y);
    return new GlitchyPopupItem(x, y);
  }
}
