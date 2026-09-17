import { StageBase } from './stage_base.js';
import { StaticPlatform } from './platform_static.js';
import { CrumblingPlatform } from './platform_crumbling.js';
import { ConveyorPlatform } from './platform_conveyor.js';

export class FlatpackFactoryStage extends StageBase {
  constructor() {
    super('flatpack_factory', 'Swedish Furniture Warehouse');
    this.platforms = [
      new ConveyorPlatform(200, 560, 880, 40, 1.5),
      new CrumblingPlatform(360, 380, 160, 20),
      new CrumblingPlatform(760, 380, 160, 20)
    ];
  }
}
