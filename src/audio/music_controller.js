import { audioEngine } from './audio_context.js';

export class MusicController {
  constructor() {
    this.currentTrack = null;
    this.musicGain = null;
  }

  playTrack(url, loop = true) {
    audioEngine.init();
    if (this.currentTrack) {
      this.stopTrack();
    }

    this.currentTrack = new Audio(url);
    this.currentTrack.loop = loop;
    this.currentTrack.crossOrigin = 'anonymous';

    const source = audioEngine.ctx.createMediaElementSource(this.currentTrack);
    this.musicGain = audioEngine.ctx.createGain();
    
    source.connect(this.musicGain);
    this.musicGain.connect(audioEngine.masterGain);

    this.currentTrack.play().catch(e => console.warn('Music play blocked:', e));
  }

  setMusicVolume(vol) {
    if (this.musicGain) {
      this.musicGain.gain.setValueAtTime(vol, audioEngine.ctx.currentTime);
    }
  }

  stopTrack() {
    if (this.currentTrack) {
      this.currentTrack.pause();
      this.currentTrack.currentTime = 0;
      this.currentTrack = null;
    }
  }
}

export const musicController = new MusicController();
