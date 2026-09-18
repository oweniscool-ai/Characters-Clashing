import { ParticleEmitter } from './particle_emitter.js';

export class DustPuffVFX extends ParticleEmitter {
  spawnLandingPuff(x, y) {
    this.x = x;
    this.y = y;
    this.emit(10, {
      color: '#aaaaaa',
      minSpeed: 0.5,
      maxSpeed: 2.5,
      minSize: 3,
      maxSize: 8,
      minLife: 12,
      maxLife: 28,
      angle: -Math.PI / 2,
      spread: Math.PI / 2
    });
  }
}
