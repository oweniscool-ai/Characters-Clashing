export class GrabMechanics {
  constructor() {
    this.isGrabbing = false;
    this.grabbedTarget = null;
    this.pummelDamageTimer = 0;
  }

  initiateGrab(attacker, target) {
    this.isGrabbing = true;
    this.grabbedTarget = target;
    target.isGrabbed = true;
  }

  pummel() {
    if (this.grabbedTarget) {
      this.pummelDamageTimer++;
      if (this.pummelDamageTimer >= 30) {
        this.pummelDamageTimer = 0;
        return 3; // 3% damage per pummel tick
      }
    }
    return 0;
  }

  release() {
    if (this.grabbedTarget) {
      this.grabbedTarget.isGrabbed = false;
      this.grabbedTarget = null;
    }
    this.isGrabbing = false;
  }
}
