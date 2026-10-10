import { ItemBase } from './item_base.js';

export class EnergyDrinkItem extends ItemBase {
  constructor(x, y) {
    super('drink', 'Hyper Caffeine Drink', x, y);
  }

  apply(fighter) {
    fighter.speedMultiplier = 1.5;
    fighter.buffTimer = 360;
  }
}
