import { audioEngine } from './audio_context.js';
import { musicController } from './music_controller.js';

export class AudioSettings {
  static saveSettings(masterVol, musicVol, sfxVol) {
    localStorage.setItem('cc_master_vol', masterVol);
    localStorage.setItem('cc_music_vol', musicVol);
    localStorage.setItem('cc_sfx_vol', sfxVol);

    audioEngine.setMasterVolume(masterVol);
    musicController.setMusicVolume(musicVol);
  }

  static loadSettings() {
    const masterVol = parseFloat(localStorage.getItem('cc_master_vol') ?? '1.0');
    const musicVol = parseFloat(localStorage.getItem('cc_music_vol') ?? '0.8');

    audioEngine.setMasterVolume(masterVol);
    musicController.setMusicVolume(musicVol);
  }
}
