import { StageBase } from './stage_base.js';
import { StaticPlatform } from './platform_static.js';
import { MovingPlatform } from './platform_moving.js';

export class UnboxingStudioStage extends StageBase {
  constructor() {
    super('unboxing_studio', 'Viral Unboxing Studio');
    this.platforms = [
      new StaticPlatform(200, 580, 880, 40),
      new MovingPlatform(250, 320, 140, 20, [{x: 250, y: 320}, {x: 250, y: 460}], 2),
      new MovingPlatform(890, 320, 140, 20, [{x: 890, y: 460}, {x: 890, y: 320}], 2)
    ];
  }
}
