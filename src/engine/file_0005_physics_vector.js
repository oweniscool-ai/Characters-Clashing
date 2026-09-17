export class PhysicsVector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  static calculateKnockback(percent, baseKB, scaling, weight) {
    const p = percent / 100;
    const w = 200 / (weight + 100);
    return (((p * 10 + (p * baseKB) / 20) * w * 1.4) + 18) * (scaling / 100);
  }
}
