import { audioEngine } from './audio_context.js';

export class MusicIntensityFader {
  constructor(lowTrackUrl, highTrackUrl) {
    this.lowAudio = new Audio(lowTrackUrl);
    this.highAudio = new Audio(highTrackUrl);
    this.lowGain = null;
    this.highGain = null;
  }

  start() {
    audioEngine.init();
    this.lowGain = audioEngine.ctx.createGain();
    this.highGain = audioEngine.ctx.createGain();

    const lowSource = audioEngine.ctx.createMediaElementSource(this.lowAudio);
    const highSource = audioEngine.ctx.createMediaElementSource(this.highAudio);

    lowSource.connect(this.lowGain);
    highSource.connect(this.highGain);

    this.lowGain.connect(audioEngine.masterGain);
    this.highGain.connect(audioEngine.masterGain);

    this.lowGain.gain.value = 1.0;
    this.highGain.gain.value = 0.0;

    this.lowAudio.loop = true;
    this.highAudio.loop = true;

    this.lowAudio.play();
    this.highAudio.play();
  }

  setIntensity(ratio) {
    const clamped = Math.max(0, Math.min(1, ratio));
    const now = audioEngine.ctx.currentTime;
    this.lowGain.gain.setValueAtTime(1 - clamped, now);
    this.highGain.gain.setValueAtTime(clamped, now);
  }
}
