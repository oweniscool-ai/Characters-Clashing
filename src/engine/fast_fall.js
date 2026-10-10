export class FastFall {
  constructor() {
    this.isFastFalling = false;
  }

  checkInput(fighter, inputDown, currentVelocityY) {
    if (!this.isFastFalling && fighter.isAirborne && inputDown && currentVelocityY >= 0) {
      this.isFastFalling = true;
      return true; // Apply fast fall multiplier
    }
    return false;
  }

  reset() {
    this.isFastFalling = false;
  }
}
