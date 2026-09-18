import { ParticleEmitter } from './particle_emitter.js';

export class FireParticleEmitter extends ParticleEmitter {
  emitFlame(x, y) {
    this.x = x;
    this.y = y;
    const colors = ['#ff2200', '#ff7700', '#ffcc00'];
    const chosenColor = colors[Math.floor(Math.random() * colors.length)];

    this.emit(4, {
      color: chosenColor,
      minSpeed: 1,
      maxSpeed: 3,
      minSize: 3,
      maxSize: 9,
      minLife: 15,
      maxLife: 30,
      angle: -Math.PI / 2,
      spread: Math.PI / 6
    });
  }
}
