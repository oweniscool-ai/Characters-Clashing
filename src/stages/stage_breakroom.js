import { StageBase } from './stage_base.js';
import { StaticPlatform } from './platform_static.js';
import { CrumblingPlatform } from './platform_crumbling.js';

export class BreakroomStage extends StageBase {
  constructor() {
    super('breakroom', 'Office Breakroom');
    this.platforms = [
      new StaticPlatform(200, 540, 880, 40),
      new CrumblingPlatform(540, 360, 200, 20)
    ];
  }
}
