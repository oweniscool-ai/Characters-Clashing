export class RollbackEngine {
  constructor(maxRollbackFrames = 7) {
    this.maxRollbackFrames = maxRollbackFrames;
    this.historyBuffer = [];
  }

  saveSnapshot(snapshot) {
    this.historyBuffer.push(snapshot);
    if (this.historyBuffer.length > 60) {
      this.historyBuffer.shift();
    }
  }

  reconcile(receivedRemoteInput, targetFrame) {
    const baseSnapshot = this.historyBuffer.find(s => s.frame === targetFrame);
    if (!baseSnapshot) return false;

    // Resimulate frames from targetFrame up to current frame with corrected input
    return true;
  }
}
