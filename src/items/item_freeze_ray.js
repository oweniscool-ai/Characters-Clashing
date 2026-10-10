import { ThrowableItem } from './item_throwable.js';

export class FreezeRayItem extends ThrowableItem {
  constructor(x, y) {
    super('freeze_ray', 'Cryo Freeze Ray', x, y, 5);
    this.charges = 4;
  }

  freezeTarget(fighter) {
    fighter.isFrozen = true;
    fighter.freezeTimer = 120; // 2 seconds frozen
  }
}
