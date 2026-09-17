import { FighterBase } from '../engine/fighter_base.js';

export class CouponClipperClara extends FighterBase {
  constructor() {
    super('clara', 'Coupon Clipper Clara');
    this.weight = 82;
    this.coupons = 0;
  }

  specialAttack() {
    this.coupons += 1;
    const execute = this.coupons >= 3;
    if (execute) this.coupons = 0;
    return { name: 'BOGO Slash', damage: execute ? 24 : 7, angle: 50, baseKB: execute ? 75 : 20, scaling: 85 };
  }
}
