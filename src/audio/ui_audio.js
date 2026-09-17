import { playSFX } from './sfx_player.js';

export class UIAudioHandler {
  static attachHoverSound(element) {
    element.addEventListener('mouseenter', () => playSFX('BUTTON_HOVER', 0.05, 0.4));
  }

  static attachClickSound(element) {
    element.addEventListener('click', () => playSFX('BUTTON_CLICK', 0, 0.7));
  }
}
