import { FighterBase } from '../engine/fighter_base.js';

export class MicrowavedMetalMike extends FighterBase {
  constructor() {
    super('mike', 'Microwaved Metal Mike');
    this.weight = 120;
    this.sparks = 0;
  }

  specialAttack() {
    this.sparks += 1;
    const explode = this.sparks >= 3;
    if (explode) this.sparks = 0;
    return { name: 'Foil Spark Meltdown', damage: explode ? 28 : 6, angle: 90, baseKB: explode ? 85 : 15, scaling: 100 };
  }
}
