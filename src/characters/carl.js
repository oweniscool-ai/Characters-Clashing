import { FighterBase } from '../engine/fighter_base.js';

export class CapsLockCarl extends FighterBase {
  constructor() {
    super('carl', 'Caps Lock Carl');
    this.weight = 130;
  }

  specialAttack() {
    return { name: 'ALL CAPS SMASH', damage: 22, angle: 40, baseKB: 70, scaling: 95 };
  }
}
