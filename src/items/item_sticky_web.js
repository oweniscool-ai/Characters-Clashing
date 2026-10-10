import { ItemBase } from './item_base.js';

export class StickyWebItem extends ItemBase {
  constructor(x, y) {
    super('web', 'Sticky Web Trap', x, y);
    this.width = 50;
    this.height = 20;
  }

  trapFighter(fighter) {
    fighter.speedMultiplier = 0.3;
    fighter.trapTimer = 180;
  }
}
