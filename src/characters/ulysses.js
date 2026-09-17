import { FighterBase } from '../engine/fighter_base.js';

export class UnsubscribeButtonUlysses extends FighterBase {
  constructor() {
    super('ulysses', 'Unsubscribe Ulysses');
    this.weight = 75;
  }

  specialAttack() {
    return { name: 'Tiny Target Slip', damage: 8, angle: 60, baseKB: 25, scaling: 60 };
  }
}
