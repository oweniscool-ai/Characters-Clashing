import { ParticleEmitter } from './particle_emitter.js';
import { screenShake } from './screen_shake.js';

export class BlastzoneExplosionVFX extends ParticleEmitter {
  trigger(x, y) {
    this.x = x;
    this.y = y;
    screenShake.shake(18, 25);
    this.emit(40, {
      color: '#ff2200',
      minSpeed: 6,
      maxSpeed: 16,
      minSize: 4,
      maxSize: 12,
      minLife: 20,
      maxLife: 50
    });
    this.emit(25, {
      color: '#ffffff',
      minSpeed: 4,
      maxSpeed: 10,
      minSize: 2,
      maxSize: 6,
      minLife: 15,
      maxLife: 35
    });
  }
}
