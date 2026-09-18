import { ParticleEmitter } from './particle_emitter.js';

export class WaterSplashVFX extends ParticleEmitter {
  splash(x, y) {
    this.x = x;
    this.y = y;
    this.emit(18, {
      color: '#33aaff',
      minSpeed: 2,
      maxSpeed: 7,
      minSize: 2,
      maxSize: 6,
      minLife: 15,
      maxLife: 35,
      angle: -Math.PI / 2,
      spread: Math.PI / 3
    });
  }
}
