import { audioEngine } from './audio_context.js';
import { sfxLoader } from './sfx_loader.js';

export function playSpatialSFX(key, posX, canvasWidth = 1280) {
  audioEngine.init();
  const buffer = sfxLoader.getBuffer(key);
  if (!buffer) return;

  const source = audioEngine.ctx.createBufferSource();
  const panner = audioEngine.ctx.createStereoPanner();

  source.buffer = buffer;
  const panValue = (posX / canvasWidth) * 2 - 1;
  panner.pan.setValueAtTime(Math.max(-1, Math.min(1, panValue)), audioEngine.ctx.currentTime);

  source.connect(panner);
  panner.connect(audioEngine.masterGain);
  source.start(0);
}
