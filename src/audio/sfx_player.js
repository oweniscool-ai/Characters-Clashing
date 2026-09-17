import { audioEngine } from './audio_context.js';
import { sfxLoader } from './sfx_loader.js';

export function playSFX(key, pitchVar = 0.1, volume = 1.0) {
  audioEngine.init();
  const buffer = sfxLoader.getBuffer(key);
  if (!buffer) return;

  const source = audioEngine.ctx.createBufferSource();
  const gainNode = audioEngine.ctx.createGain();

  source.buffer = buffer;
  const detune = (Math.random() * 2 - 1) * pitchVar * 1000;
  source.detune.value = detune;

  gainNode.gain.setValueAtTime(volume, audioEngine.ctx.currentTime);

  source.connect(gainNode);
  gainNode.connect(audioEngine.masterGain);
  source.start(0);
}
