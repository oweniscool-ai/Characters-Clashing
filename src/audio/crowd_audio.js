import { playSFX } from './sfx_player.js';

export class CrowdAudioController {
  static triggerHypeCheer() {
    playSFX('crowd_cheer_hype', 0.05, 0.8);
  }

  static triggerGasp() {
    playSFX('crowd_gasp', 0.02, 0.9);
  }
}
