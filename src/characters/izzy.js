import { FighterBase } from '../engine/fighter_base.js';

export class OverlyExcitedInfluencerIzzy extends FighterBase {
  constructor() {
    super('izzy', 'Overly Excited Influencer Izzy');
    this.weight = 84;
  }

  specialAttack() {
    return { name: 'Ring Light Flash', damage: 10, angle: 65, baseKB: 30, scaling: 70 };
  }
}
