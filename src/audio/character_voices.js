import { playSFX } from './sfx_player.js';

export class CharacterVoiceManager {
  static playTaunt(charId) {
    playSFX(`voice_${charId}_taunt`, 0, 0.9);
  }

  static playHurt(charId) {
    playSFX(`voice_${charId}_hurt`, 0.1, 0.8);
  }

  static playSpecial(charId) {
    playSFX(`voice_${charId}_special`, 0, 1.0);
  }
}
