import { ItemBase } from './item_base.js';

export class GliderWingItem extends ItemBase {
  constructor(x, y) {
    super('glider', 'Emergency Glider', x, y);
  }

  apply(fighter) {
    fighter.hasGlider = true;
  }
}
