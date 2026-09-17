import { FighterBase } from '../engine/fighter_base.js';

export class ExpressLaneViolatorVince extends FighterBase {
  constructor() {
    super('vince', 'Express Lane Vince');
    this.weight = 94;
  }

  specialAttack() {
    return { name: '16 Items Or Less Crash', damage: 14, angle: 25, baseKB: 50, scaling: 75 };
  }
}
