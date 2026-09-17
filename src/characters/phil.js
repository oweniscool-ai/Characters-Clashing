import { FighterBase } from '../engine/fighter_base.js';

export class PhantomBuzzPhil extends FighterBase {
  constructor() {
    super('phil', 'Phantom Buzz Phil');
    this.weight = 89;
  }

  specialAttack() {
    return { name: 'Vibration Feint', damage: 9, angle: 50, baseKB: 20, scaling: 80 };
  }
}
