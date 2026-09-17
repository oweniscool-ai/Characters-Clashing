import { FighterBase } from '../engine/fighter_base.js';

export class LowBatteryLuke extends FighterBase {
  constructor() {
    super('luke_bat', 'Low Battery Luke');
    this.weight = 87;
    this.battery = 100;
  }

  specialAttack() {
    this.battery = Math.max(this.battery - 15, 5);
    const power = this.battery / 100;
    return { name: '1% Energy Surge', damage: Math.floor(18 * power), angle: 30, baseKB: 40, scaling: 75 };
  }
}
