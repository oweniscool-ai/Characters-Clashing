export class TrainingDashboardUI {
  constructor(cpuBehavior = 'STAND', damageSetting = 0) {
    this.cpuBehavior = cpuBehavior;
    this.damageSetting = damageSetting;
  }

  render(ctx, width = 1280, height = 720) {
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(20, 20, 320, 150);

    ctx.fillStyle = '#00ffcc';
    ctx.font = 'bold 16px monospace';
    ctx.fillText('TRAINING LAB CONTROLS', 35, 50);

    ctx.fillStyle = '#ffffff';
    ctx.font = '14px monospace';
    ctx.fillText(`CPU Behavior: ${this.cpuBehavior}`, 35, 85);
    ctx.fillText(`Manual Damage: ${this.damageSetting}%`, 35, 115);
    ctx.fillText(`Hitbox Overlay: ON`, 35, 145);

    ctx.restore();
  }
}
