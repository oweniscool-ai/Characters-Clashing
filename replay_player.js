export class ReplayPlayer {
  constructor(replayJSON) {
    const parsed = typeof replayJSON === 'string' ? JSON.parse(replayJSON) : replayJSON;
    this.metadata = parsed.metadata;
    this.frames = parsed.frames;
    this.currentFrameIndex = 0;
  }

  getNextFrameInputs() {
    if (this.currentFrameIndex >= this.frames.length) return null;
    const frameData = this.frames[this.currentFrameIndex];
    this.currentFrameIndex++;
    return frameData;
  }

  hasFinished() {
    return this.currentFrameIndex >= this.frames.length;
  }
}
