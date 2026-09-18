export class DamageTracker {
  constructor(isStamina = false, startingStamina = 100) {
    this.isStamina = isStamina;
    this.startingStamina = startingStamina;
    this.percentages = new Map();
    this.stamina = new Map();
  }

  registerPlayer(playerId) {
    this.percentages.set(playerId, 0);
    this.stamina.set(playerId, this.startingStamina);
  }

  applyDamage(playerId, amount) {
    if (this.isStamina) {
      const current = this.stamina.get(playerId) ?? 0;
      const next = Math.max(0, current - amount);
      this.stamina.set(playerId, next);
      return next <= 0; // returns true if stamina depleted
    } else {
      const current = this.percentages.get(playerId) ?? 0;
      this.percentages.set(playerId, current + amount);
      return false;
    }
  }

  resetPlayer(playerId) {
    this.percentages.set(playerId, 0);
    this.stamina.set(playerId, this.startingStamina);
  }

  getDisplayValue(playerId) {
    if (this.isStamina) {
      return `${Math.ceil(this.stamina.get(playerId) ?? 0)} HP`;
    }
    return `${Math.floor(this.percentages.get(playerId) ?? 0)}%`;
  }
}
