import { ParticleEmitter } from './particle_emitter.js';

export class HitSparkVFX extends ParticleEmitter {
  burst(x, y, intensity = 1.0) {
    this.x = x;
    this.y = y;
    this.emit(Math.floor(15 * intensity), {
      color: '#ffdd44',
      minSpeed: 3,
      maxSpeed: 8 * intensity,
      minSize: 2,
      maxSize: 5,
      minLife: 10,
      maxLife: 25,
      spread: Math.PI * 2
    });
  }
}
