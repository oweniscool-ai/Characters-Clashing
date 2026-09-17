class AudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMasterVolume(val) {
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, val)), this.ctx.currentTime);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime);
    }
  }
}

export const audioEngine = new AudioEngine();
