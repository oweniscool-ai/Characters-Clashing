export class InputBuffer {
  constructor(bufferWindowFrames = 10) {
    this.bufferWindowFrames = bufferWindowFrames;
    this.queue = [];
  }

  pushInput(inputAction, currentFrame) {
    this.queue.push({ action: inputAction, frame: currentFrame });
    this.pruneOldInputs(currentFrame);
  }

  consumeInput(targetAction, currentFrame) {
    this.pruneOldInputs(currentFrame);
    const index = this.queue.findIndex(item => item.action === targetAction);
    if (index !== -1) {
      this.queue.splice(index, 1);
      return true;
    }
    return false;
  }

  pruneOldInputs(currentFrame) {
    this.queue = this.queue.filter(item => currentFrame - item.frame <= this.bufferWindowFrames);
  }
}
