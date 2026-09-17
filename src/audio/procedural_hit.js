import { audioEngine } from './audio_context.js';

export function generateProceduralHit(intensity = 1.0) {
  audioEngine.init();
  const ctx = audioEngine.ctx;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(150 * intensity, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.15);

  gain.gain.setValueAtTime(0.8 * intensity, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

  osc.connect(gain);
  gain.connect(audioEngine.masterGain);

  osc.start();
  osc.stop(ctx.currentTime + 0.15);
}
