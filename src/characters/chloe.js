import { FighterBase } from '../engine/fighter_base.js';

export class ColdCoffeeChloe extends FighterBase {
  constructor() {
    super('chloe', 'Cold Coffee Chloe');
    this.weight = 91;
  }

  specialAttack() {
    return { name: 'Icy Sludge Douse', damage: 10, angle: 20, baseKB: 30, scaling: 50 };
  }
}
