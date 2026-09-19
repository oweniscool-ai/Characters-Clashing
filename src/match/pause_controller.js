export class PauseController {
  constructor(allowPause = true) {
    this.allowPause = allowPause;
    this.isPaused = false;
    this.pauserPlayerId = null;
  }

  togglePause(playerId) {
    if (!this.allowPause) return false;

    if (this.isPaused) {
      if (this.pauserPlayerId === null || this.pauserPlayerId === playerId) {
        this.isPaused = false;
        this.pauserPlayerId = null;
      }
    } else {
      this.isPaused = true;
      this.pauserPlayerId = playerId;
    }
    return this.isPaused;
  }

  forceUnpause() {
    this.isPaused = false;
    this.pauserPlayerId = null;
  }
}
