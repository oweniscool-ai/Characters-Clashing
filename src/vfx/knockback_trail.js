import { ParticleEmitter } from './particle_emitter.js';

export class KnockbackTrailVFX extends ParticleEmitter {
  spawnTrailSegment(x, y, angle) {
    this.x = x;
    this.y = y;
    const oppositeAngle = angle + Math.PI;
    this.emit(3, {
      color: '#ff8800',
      minSpeed: 1,
      maxSpeed: 3,
      minSize: 3,
      maxSize: 7,
      minLife: 8,
      maxLife: 18,
      angle: oppositeAngle,
      spread: Math.PI / 4
    });
  }
}
