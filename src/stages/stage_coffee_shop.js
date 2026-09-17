import { StageBase } from './stage_base.js';
import { StaticPlatform } from './platform_static.js';
import { AcidPoolHazard } from './hazard_acid_pool.js';

export class CoffeeShopStage extends StageBase {
  constructor() {
    super('coffee_shop', 'Hipster Coffee Shop');
    this.platforms = [
      new StaticPlatform(250, 500, 780, 40),
      new StaticPlatform(500, 340, 280, 20, true)
    ];
    this.hazards = [
      new AcidPoolHazard(680, 540, 0.4) // Scalding coffee floor
    ];
  }
}
