import { FighterBase } from '../engine/fighter_base.js';

export class BackseatDriverBob extends FighterBase {
  constructor() {
    super('bob', 'Backseat Driver Bob');
    this.weight = 115;
  }

  specialAttack() {
    return { name: 'Sudden U-Turn Grab', damage: 16, angle: 20, baseKB: 60, scaling: 80 };
  }
}
