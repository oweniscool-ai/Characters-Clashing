export class GameLoop {
  constructor(updateCallback, renderCallback) {
    this.update = updateCallback;
    this.render = renderCallback;
    this.isRunning = false;
    this.lastTime = 0;
  }

  start() {
    this.isRunning = true;
    this.lastTime = performance.now();
    requestAnimationFrame(this.loop.bind(this));
  }

  stop() {
    this.isRunning = false;
  }

  loop(currentTime) {
    if (!this.isRunning) return;
    const deltaTime = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;

    this.update(deltaTime);
    this.render();

    requestAnimationFrame(this.loop.bind(this));
  }
}
