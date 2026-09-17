import { FighterBase } from '../engine/fighter_base.js';

export class KathyTheKaren extends FighterBase {
  constructor() {
    super('kathy', 'Kathy the Karen');
    this.weight = 90;
    this.speed = 1.1;
  }

  specialAttack() {
    return { name: 'I Want The Manager', damage: 14, angle: 45, baseKB: 40, scaling: 80 };
  }
}
