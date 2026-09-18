export class AfterimageManager {
  constructor() {
    this.ghosts = [];
  }

  addGhost(x, y, width, height, color = 'rgba(0, 200, 255, 0.6)', life = 10) {
    this.ghosts.push({ x, y, width, height, color, life, maxLife: life });
  }

  update() {
    for (let i = this.ghosts.length - 1; i >= 0; i--) {
      this.ghosts[i].life--;
      if (this.ghosts[i].life <= 0) {
        this.ghosts.splice(i, 1);
      }
    }
  }

  render(ctx) {
    this.ghosts.forEach(g => {
      ctx.save();
      ctx.globalAlpha = g.life / g.maxLife;
      ctx.fillStyle = g.color;
      ctx.fillRect(g.x, g.y, g.width, g.height);
      ctx.restore();
    });
  }
}
