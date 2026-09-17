import { FighterBase } from '../engine/fighter_base.js';

export class ExpirationDateEric extends FighterBase {
  constructor() {
    super('eric', 'Expiration Date Eric');
    this.weight = 90;
    this.ticks = 0;
  }

  specialAttack() {
    this.ticks += 1;
    return { name: 'Spoiled Mold Cloud', damage: 6 + this.ticks, angle: 45, baseKB: 30, scaling: 60 };
  }
}
