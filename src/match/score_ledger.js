export class ScoreLedger {
  constructor() {
    this.stats = new Map();
  }

  registerPlayer(playerId) {
    this.stats.set(playerId, {
      kills: 0,
      deaths: 0,
      suicides: 0,
      damageDealt: 0,
      damageTaken: 0
    });
  }

  recordKill(attackerId, victimId) {
    if (attackerId === victimId) {
      const v = this.stats.get(victimId);
      if (v) {
        v.suicides++;
        v.deaths++;
      }
      return;
    }
    const att = this.stats.get(attackerId);
    const vic = this.stats.get(victimId);
    if (att) att.kills++;
    if (vic) vic.deaths++;
  }

  recordDamage(attackerId, victimId, amount) {
    if (attackerId && this.stats.has(attackerId)) {
      this.stats.get(attackerId).damageDealt += amount;
    }
    if (victimId && this.stats.has(victimId)) {
      this.stats.get(victimId).damageTaken += amount;
    }
  }

  getStats(playerId) {
    return this.stats.get(playerId);
  }
}
