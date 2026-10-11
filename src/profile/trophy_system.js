export class TrophySystem {
  constructor() {
    this.trophies = {
      bronze: 0,
      silver: 0,
      gold: 0,
      platinum: 0
    };
  }

  awardTrophy(tier) {
    if (this.trophies[tier] !== undefined) {
      this.trophies[tier]++;
    }
  }

  getTotalTrophies() {
    return this.trophies.bronze + this.trophies.silver + this.trophies.gold + this.trophies.platinum;
  }
}
