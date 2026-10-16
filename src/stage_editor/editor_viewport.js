export class EditorViewport {
  constructor(canvasWidth = 1280, canvasHeight = 720) {
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.offsetX = 0;
    this.offsetY = 0;
    this.zoom = 1.0;
  }

  applyTransform(ctx) {
    ctx.save();
    ctx.translate(this.offsetX, this.offsetY);
    ctx.scale(this.zoom, this.zoom);
  }

  restoreTransform(ctx) {
    ctx.restore();
  }
}
