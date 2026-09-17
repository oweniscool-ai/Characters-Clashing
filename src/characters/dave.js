import { FighterBase } from '../engine/fighter_base.js';

export class DIYDisasterDave extends FighterBase {
  constructor() {
    super('dave', 'DIY Disaster Dave');
    this.weight = 102;
  }

  specialAttack() {
    return { name: 'Wet Paint Trap', damage: 13, angle: 10, baseKB: 40, scaling: 50 };
  }
}
