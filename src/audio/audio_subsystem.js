import { audioEngine } from './audio_context.js';
import { musicController } from './music_controller.js';
import { preloadAllCoreAudio } from './audio_preloader.js';
import { AudioSettings } from './audio_settings.js';

export class AudioSubsystem {
  static async init() {
    audioEngine.init();
    AudioSettings.loadSettings();
    await preloadAllCoreAudio();
    console.log('Audio Subsystem Fully Initialized');
  }

  static stopAll() {
    musicController.stopTrack();
  }
}
