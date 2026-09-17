import { FighterBase } from '../engine/fighter_base.js';

export class UnboxingVideoUrvashi extends FighterBase {
  constructor() {
    super('urvashi', 'Unboxing Video Urvashi');
    this.weight = 88;
  }

  specialAttack() {
    return { name: 'Mystery Box Blast', damage: 13, angle: 80, baseKB: 35, scaling: 75 };
  }
}
