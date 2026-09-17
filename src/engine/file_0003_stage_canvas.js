export class StageCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawPlatform(x, y, w, h, color = '#444444') {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }
}
