import { FighterBase } from '../engine/fighter_base.js';

export class KeyboardWarriorKeven extends FighterBase {
  constructor() {
    super('keven', 'Keyboard Warrior Keven');
    this.weight = 85;
  }

  specialAttack() {
    return { name: 'Caps Lock Barrage', damage: 12, angle: 90, baseKB: 50, scaling: 70 };
  }
}
