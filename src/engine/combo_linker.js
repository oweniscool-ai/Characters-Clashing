export class ComboLinker {
  constructor() {
    this.currentAttackLevel = 0;
    this.cancelWindowActive = false;
    this.cancelTimer = 0;
  }

  registerAttackHit(attackLevel) {
    this.currentAttackLevel = attackLevel;
    this.cancelWindowActive = true;
    this.cancelTimer = 15; // 15-frame window to input follow-up attack
  }

  update() {
    if (this.cancelWindowActive) {
      this.cancelTimer--;
      if (this.cancelTimer <= 0) {
        this.reset();
      }
    }
  }

  attemptCancel(nextAttackLevel) {
    if (this.cancelWindowActive && nextAttackLevel > this.currentAttackLevel) {
      this.reset();
      return true;
    }
    return false;
  }

  reset() {
    this.currentAttackLevel = 0;
    this.cancelWindowActive = false;
    this.cancelTimer = 0;
  }
}
