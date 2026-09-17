import { StageBase } from './stage_base.js';
import { StaticPlatform } from './platform_static.js';
import { SpikeHazard } from './hazard_spikes.js';

export class ServerRoomStage extends StageBase {
  constructor() {
    super('server_room', 'Overheated Server Room');
    this.platforms = [
      new StaticPlatform(200, 550, 880, 40),
      new StaticPlatform(350, 380, 180, 20, true),
      new StaticPlatform(750, 380, 180, 20, true)
    ];
    this.hazards = [
      new SpikeHazard(610, 520, 60, 30)
    ];
  }
}
