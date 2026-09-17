import { PhysicsVector } from './file_0005_physics_vector.js';

export class FighterBase {
  constructor(id, name, weight = 100) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.percent = 0;
    this.stocks = 3;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.isGrounded = false;
    this.isCPU = false;
  }

  applyDamage(amount) {
    this.percent = Math.min(this.percent + amount, 999);
  }

  receiveKnockback(angle, baseKB, scaling) {
    const kb = PhysicsVector.calculateKnockback(this.percent, baseKB, scaling, this.weight);
    const rad = (angle * Math.PI) / 180;
    this.vx = Math.cos(rad) * kb;
    this.vy = -Math.sin(rad) * kb;
  }
}
