import { FighterBase } from '../engine/fighter_base.js';

export class AutoCorrectAaron extends FighterBase {
  constructor() {
    super('aaron', 'Auto-Correct Aaron');
    this.weight = 91;
  }

  specialAttack() {
    return { name: 'Ducking Typos', damage: 11, angle: 180, baseKB: 40, scaling: 65 };
  }
}
