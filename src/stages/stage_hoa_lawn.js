import { StageBase } from './stage_base.js';
import { StaticPlatform } from './platform_static.js';
import { BouncyPlatform } from './platform_bouncy.js';

export class HOALawnStage extends StageBase {
  constructor() {
    super('hoa_lawn', 'Manicured HOA Front Lawn');
    this.platforms = [
      new StaticPlatform(220, 560, 840, 40),
      new BouncyPlatform(580, 420, 120, 20)
    ];
  }
}
