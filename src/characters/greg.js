import { FighterBase } from '../engine/fighter_base.js';

export class KarenExHusbandGreg extends FighterBase {
  constructor() {
    super('greg', 'Karen’s Ex-Husband Greg');
    this.weight = 105;
  }

  specialAttack() {
    return { name: 'Asset Liquidation', damage: 15, angle: 60, baseKB: 30, scaling: 85 };
  }
}
