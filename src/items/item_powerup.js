import { ItemBase } from './item_base.js';

export class PowerUpItem extends ItemBase {
  constructor(id, name, x, y, buffType, durationFrames = 300) {
    super(id, name, x, y);
    this.buffType = buffType; // 'speed', 'attack', 'shield'
    this.durationFrames = durationFrames;
  }

  applyBuff(fighter) {
    fighter.activeBuff = {
      type: this.buffType,
      timer: this.durationFrames
    };
  }
}
