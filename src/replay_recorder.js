export class ReplayRecorder {
  constructor(stageId, playerConfigs) {
    this.metadata = {
      stageId,
      playerConfigs,
      date: new Date().toISOString()
    };
    this.frames = [];
  }

  recordFrame(frameIndex, inputsMap) {
    const snapshot = {};
    inputsMap.forEach((inputState, playerId) => {
      snapshot[playerId] = { ...inputState };
    });
    this.frames.push({ frame: frameIndex, inputs: snapshot });
  }

  exportReplayJSON() {
    return JSON.stringify({
      metadata: this.metadata,
      frames: this.frames
    });
  }
}
