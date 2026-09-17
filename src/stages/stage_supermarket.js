import { StageBase } from './stage_base.js';
import { StaticPlatform } from './platform_static.js';
import { ConveyorPlatform } from './platform_conveyor.js';

export class SupermarketStage extends StageBase {
  constructor() {
    super('supermarket', 'Supermarket Express Lane');
    this.platforms = [
      new StaticPlatform(240, 520, 800, 40),
      new ConveyorPlatform(400, 380, 200, 20, 2),
      new ConveyorPlatform(680, 380, 200, 20, -2)
    ];
  }
}
