import { ParticleEmitter } from './particle_emitter.js';

export class ProjectileTailVFX extends ParticleEmitter {
  attachToProjectile(projX, projY, color = '#66ccff') {
    this.x = projX;
    this.y = projY;
    this.emit(2, {
      color: color,
      minSpeed: 0.2,
      maxSpeed: 1.0,
      minSize: 2,
      maxSize: 5,
      minLife: 8,
      maxLife: 16
    });
  }
}
