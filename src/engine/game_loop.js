export class GameLoop {
  constructor(update, render) {
    this.update = update;
    this.render = render;
  }
  start() {
    const step = () => {
      this.update();
      this.render();
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
