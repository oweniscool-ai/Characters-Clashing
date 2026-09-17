import { FighterBase } from '../engine/fighter_base.js';

export class HOAPresidentBrenda extends FighterBase {
  constructor() {
    super('brenda', 'HOA President Brenda');
    this.weight = 92;
  }

  specialAttack() {
    return { name: 'Citation Violation', damage: 9, angle: 50, baseKB: 25, scaling: 55 };
  }
}
