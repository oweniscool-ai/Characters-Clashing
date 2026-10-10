export class ShieldMechanics {
  constructor(maxHealth = 100) {
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.isBroken = false;
    this.recoveryTimer = 0;
  }

  drain(amount = 2) {
    if (this.isBroken) return;
    this.health = Math.max(0, this.health - amount);
    if (this.health === 0) {
      this.breakShield();
    }
  }

  regenerate(amount = 0.5) {
    if (this.isBroken) {
      this.recoveryTimer--;
      if (this.recoveryTimer <= 0) {
        this.isBroken = false;
        this.health = this.maxHealth;
      }
      return;
    }
    this.health = Math.min(this.maxHealth, this.health + amount);
  }

  breakShield() {
    this.isBroken = true;
    this.recoveryTimer = 180; // 3 seconds total dizzy state
  }
}
