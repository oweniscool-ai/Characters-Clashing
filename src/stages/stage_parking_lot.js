import { StageBase } from './stage_base.js';
import { StaticPlatform } from './platform_static.js';
import { MovingPlatform } from './platform_moving.js';

export class ParkingLotStage extends StageBase {
  constructor() {
    super('parking_lot', 'Parallel Parking Lot');
    this.platforms = [
      new StaticPlatform(180, 560, 920, 40),
      new MovingPlatform(300, 380, 160, 20, [{x: 300, y: 380}, {x: 820, y: 380}], 3)
    ];
  }
}
