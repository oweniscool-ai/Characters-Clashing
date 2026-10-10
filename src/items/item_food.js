import { ItemBase } from './item_base.js';

export class HealingFoodItem extends ItemBase {
  constructor(x, y, healAmount = 15) {
    super('food', 'Healing Snack', x, y);
    this.healAmount = healAmount;
    this.width = 24;
    this.height = 24;
  }

  consume(fighter) {
    fighter.percent = Math.max(0, fighter.percent - this.healAmount);
  }
}
