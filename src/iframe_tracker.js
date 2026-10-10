export class IFrameTracker {
  constructor() {
    this.iFramesMap = new Map();
  }

  grantInvincibility(playerId, durationFrames = 120) {
    this.iFramesMap.set(playerId, durationFrames);
  }

  update() {
    this.iFramesMap.forEach((frames, playerId) => {
      if (frames > 0) {
        this.iFramesMap.set(playerId, frames - 1);
      }
    });
  }

  isInvincible(playerId) {
    return (this.iFramesMap.get(playerId) ?? 0) > 0;
  }
}
