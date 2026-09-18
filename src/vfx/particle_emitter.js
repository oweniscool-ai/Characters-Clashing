import { Particle } from './particle_base.js';

export class ParticleEmitter {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];
  }

  emit(count, config = {}) {
    const {
      color = '#ffffff',
      minSpeed = 1,
      maxSpeed = 5,
      minSize = 2,
      maxSize = 6,
      minLife = 20,
      maxLife = 40,
      angle = null,
      spread = Math.PI * 2
    } = config;

    for (let i = 0; i < count; i++) {
      const baseAngle = angle !== null ? angle : Math.random() * Math.PI * 2;
      const finalAngle = baseAngle + (Math.random() - 0.5) * spread;
      const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
      const vx = Math.cos(finalAngle) * speed;
      const vy = Math.sin(finalAngle) * speed;
      const life = minLife + Math.random() * (maxLife - minLife);
      const size = minSize + Math.random() * (maxSize - minSize);

      this.particles.push(new Particle(this.x, this.y, vx, vy, life, color, size));
    }
  }

  update(delta = 1) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.update(delta);
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  render(ctx) {
    this.particles.forEach(p => p.render(ctx));
  }
}
