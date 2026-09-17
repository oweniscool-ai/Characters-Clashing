export class PendulumHazard {
  constructor(anchorX, anchorY, length = 200, speed = 0.03) {
    this.anchorX = anchorX;
    this.anchorY = anchorY;
    this.length = length;
    this.angle = Math.PI / 4;
    this.speed = speed;
    this.angleVel = 0;
  }

  update() {
    const angleAccel = (-0.005) * Math.sin(this.angle);
    this.angleVel += angleAccel;
    this.angle += this.angleVel;
  }

  getBladePosition() {
    return {
      x: this.anchorX + Math.sin(this.angle) * this.length,
      y: this.anchorY + Math.cos(this.angle) * this.length
    };
  }

  render(ctx) {
    const pos = this.getBladePosition();
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(this.anchorX, this.anchorY);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    ctx.fillStyle = '#ff2222';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 25, 0, Math.PI * 2);
    ctx.fill();
  }
}
