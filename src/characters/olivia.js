import { FighterBase } from '../engine/fighter_base.js';

export class OversleepingOlivia extends FighterBase {
  constructor() {
    super('olivia', 'Oversleeping Olivia');
    this.weight = 118;
  }

  specialAttack() {
    return { name: 'Snooze Button Slam', damage: 20, angle: 70, baseKB: 65, scaling: 90 };
  }
}
