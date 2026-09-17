import { FighterBase } from '../engine/fighter_base.js';

export class ParallelParkingPatty extends FighterBase {
  constructor() {
    super('patty', 'Parallel Parking Patty');
    this.weight = 112;
  }

  specialAttack() {
    return { name: 'Tight Space Bumper Shove', damage: 16, angle: 15, baseKB: 60, scaling: 85 };
  }
}
