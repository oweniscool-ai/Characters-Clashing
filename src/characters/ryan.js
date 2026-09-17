import { FighterBase } from '../engine/fighter_base.js';

export class ReplyAllRyan extends FighterBase {
  constructor() {
    super('ryan', 'Reply-All Ryan');
    this.weight = 93;
  }

  specialAttack() {
    return { name: 'Company-Wide Blast', damage: 15, angle: 45, baseKB: 50, scaling: 80 };
  }
}
