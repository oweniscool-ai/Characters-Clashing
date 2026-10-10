export class JumpController {
  constructor(jumpSquatFrames = 3) {
    this.jumpSquatFrames = jumpSquatFrames;
    this.squatCounter = 0;
    this.isSquatting = false;
  }

  startJumpSquat() {
    this.isSquatting = true;
    this.squatCounter = 0;
  }

  update(isJumpButtonHeld) {
    if (!this.isSquatting) return null;

    this.squatCounter++;
    if (this.squatCounter >= this.jumpSquatFrames) {
      this.isSquatting = false;
      const isShortHop = !isJumpButtonHeld;
      return { action: 'JUMP', isShortHop };
    }
    return null;
  }
}
