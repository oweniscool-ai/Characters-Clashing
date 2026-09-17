import { FighterBase } from '../engine/fighter_base.js';

export class CryptoBroChad extends FighterBase {
  constructor() {
    super('chad', 'Crypto Bro Chad');
    this.weight = 80;
  }

  specialAttack() {
    const market = Math.random() * 2;
    return { name: 'To The Moon', damage: Math.floor(10 * market), angle: 45, baseKB: 30, scaling: 90 };
  }
}
