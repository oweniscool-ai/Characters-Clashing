import { FighterBase } from '../engine/fighter_base.js';

export class SpilledMilkStanley extends FighterBase {
  constructor() {
    super('stanley', 'Spilled Milk Stanley');
    this.weight = 95;
  }

  specialAttack() {
    return { name: 'Cry Over Spilled Milk', damage: 10, angle: 15, baseKB: 60, scaling: 40 };
  }
}
