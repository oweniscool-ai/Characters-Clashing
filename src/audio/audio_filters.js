import { audioEngine } from './audio_context.js';

export class AudioFilterEngine {
  constructor() {
    this.filter = null;
  }

  enableMuffledPauseMode() {
    audioEngine.init();
    if (!this.filter) {
      this.filter = audioEngine.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.value = 400; // Muffled effect
      audioEngine.masterGain.disconnect();
      audioEngine.masterGain.connect(this.filter);
      this.filter.connect(audioEngine.ctx.destination);
    }
  }

  disableFilters() {
    if (this.filter) {
      this.filter.disconnect();
      audioEngine.masterGain.disconnect();
      audioEngine.masterGain.connect(audioEngine.ctx.destination);
      this.filter = null;
    }
  }
}

export const filterEngine = new AudioFilterEngine();
