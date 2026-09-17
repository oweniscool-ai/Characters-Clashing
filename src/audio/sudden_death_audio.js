import { audioEngine } from './audio_context.js';

export class SuddenDeathAudio {
  static playAlarm() {
    audioEngine.init();
    const ctx = audioEngine.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.setValueAtTime(400, ctx.currentTime + 0.2);

    gain.gain.setValueAtTime(0.5, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(audioEngine.masterGain);

    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  }
}
