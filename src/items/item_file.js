import { ItemBase } from './item_base.js';

export class HammerWeaponItem extends ItemBase {
  constructor(x, y) {
    super('hammer', 'Ban Hammer', x, y);
    this.durationFrames = 600; // 10 seconds active use
    this.width = 40;
    this.height = 40;
  }

  apply(fighter) {
    fighter.isHammerActive = true;
    fighter.hammerTimer = this.durationFrames;
  }
}
