import { FighterBase } from '../engine/fighter_base.js';

export class UnassembledFlatpackFurniture extends FighterBase {
  constructor() {
    super('furniture', 'Flatpack Furniture');
    this.weight = 125;
  }

  specialAttack() {
    return { name: 'Missing Allen Wrench', damage: 17, angle: 40, baseKB: 55, scaling: 85 };
  }
}
