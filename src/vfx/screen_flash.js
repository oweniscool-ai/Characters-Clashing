export class ScreenFlash {
  constructor() {
    this.color = '#ffffff';
    this.alpha = 0;
    this.fadeSpeed = 0.05;
  }

  flash(color = '#ffffff', initialAlpha = 0.6, fadeSpeed = 0.05) {
    this.color = color;
    this.alpha = initialAlpha;
    this.fadeSpeed = fadeSpeed;
  }

  update() {
    if (this.alpha > 0) {
      this.alpha = Math.max(0, this.alpha - this.fadeSpeed);
    }
  }

  render(ctx, width = 1280, height = 720) {
    if (this.alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }
}

export const screenFlash = new ScreenFlash();
