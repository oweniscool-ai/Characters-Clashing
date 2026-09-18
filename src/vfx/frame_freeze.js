export class FrameFreeze {
  constructor() {
    this.freezeFrames = 0;
  }

  trigger(frames = 6) {
    this.freezeFrames = frames;
  }

  update() {
    if (this.freezeFrames > 0) {
      this.freezeFrames--;
      return true; // Game loop should skip physics update while frozen
    }
    return false;
  }
}

export const frameFreeze = new FrameFreeze();
