import { FighterBase } from '../engine/fighter_base.js';

export class TermsOfServiceTodd extends FighterBase {
  constructor() {
    super('todd', 'Terms of Service Todd');
    this.weight = 108;
  }

  specialAttack() {
    return { name: 'Unskippable Scroll Wall', damage: 11, angle: 90, baseKB: 45, scaling: 70 };
  }
}
