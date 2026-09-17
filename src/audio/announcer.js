import { playSFX } from './sfx_player.js';

export class AnnouncerEngine {
  announceMatchStart() {
    playSFX('announcer_321_clash', 0, 1.0);
  }

  announceKO() {
    playSFX('announcer_ko', 0, 1.0);
  }

  announceWinner(charName) {
    const key = `announcer_win_${charName.toLowerCase().replace(/[^a-z]/g, '')}`;
    playSFX(key, 0, 1.0);
  }
}

export const announcer = new AnnouncerEngine();
