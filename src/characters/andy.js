import { FighterBase } from '../engine/fighter_base.js';

export class AndyTheAirfryer extends FighterBase {
  constructor() {
    super('andy', 'Andy the Airfryer');
    this.weight = 110;
    this.heatMeter = 0;
  }

  specialAttack() {
    this.heatMeter = Math.min(this.heatMeter + 20, 100);
    return { name: 'Rapid Air Circulation', damage: 8 + (this.heatMeter / 10), angle: 30, baseKB: 20, scaling: 60 };
  }
}
