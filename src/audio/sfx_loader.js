import { audioEngine } from './audio_context.js';

class SFXLoader {
  constructor() {
    this.buffers = new Map();
  }

  async loadSound(key, url) {
    if (this.buffers.has(key)) return this.buffers.get(key);
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioEngine.ctx.decodeAudioData(arrayBuffer);
      this.buffers.set(key, audioBuffer);
      return audioBuffer;
    } catch (err) {
      console.warn(`Failed to load audio key: ${key} from ${url}`, err);
    }
  }

  getBuffer(key) {
    return this.buffers.get(key);
  }
}

export const sfxLoader = new SFXLoader();
