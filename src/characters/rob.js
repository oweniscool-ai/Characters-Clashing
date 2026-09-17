import { FighterBase } from '../engine/fighter_base.js';

export class WiFiRouterRob extends FighterBase {
  constructor() {
    super('rob', 'Wi-Fi Router Rob');
    this.weight = 100;
  }

  specialAttack() {
    return { name: 'Packet Loss Spike', damage: 11, angle: 75, baseKB: 45, scaling: 65 };
  }
}
