import { FighterBase } from '../engine/fighter_base.js';

export class SourdoughStarterSam extends FighterBase {
  constructor() {
    super('sam', 'Sourdough Starter Sam');
    this.weight = 122;
  }

  specialAttack() {
    return { name: 'Sticky Yeast Expansion', damage: 14, angle: 85, baseKB: 40, scaling: 70 };
  }
}
