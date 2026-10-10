import { ItemBase } from './item_base.js';

export class InvincibilityStarItem extends ItemBase {
  constructor(x, y) {
    super('star', 'Invincibility Star', x, y);
    this.duration = 450; // 7.5 seconds
  }

  apply(fighter) {
    fighter.isInvincible = true;
    fighter.starTimer = this.duration;
  }
}
