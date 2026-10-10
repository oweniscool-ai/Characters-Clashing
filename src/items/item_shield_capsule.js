import { ItemBase } from './item_base.js';

export class ShieldCapsuleItem extends ItemBase {
  constructor(x, y) {
    super('capsule', 'Over-Shield Capsule', x, y);
  }

  apply(fighter) {
    fighter.shieldHealth = 200; // Boosted shield capacity
  }
}
