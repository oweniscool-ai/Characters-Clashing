import { FighterBase } from '../engine/fighter_base.js';

export class MidLifeCrisisMark extends FighterBase {
  constructor() {
    super('mark', 'Mid-Life Crisis Mark');
    this.weight = 98;
  }

  specialAttack() {
    this.percent += 3;
    return { name: 'Red Convertible Charge', damage: 18, angle: 35, baseKB: 55, scaling: 95 };
  }
}
