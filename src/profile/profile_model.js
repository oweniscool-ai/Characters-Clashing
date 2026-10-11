export class PlayerProfile {
  constructor(username = 'Player One') {
    this.username = username;
    this.level = 1;
    this.xp = 0;
    this.xpToNextLevel = 1000;
    this.title = 'Keyboard Warrior';
    this.trophies = { bronze: 0, silver: 0, gold: 0 };
  }

  addXP(amount) {
    this.xp += amount;
    if (this.xp >= this.xpToNextLevel) {
      this.xp -= this.xpToNextLevel;
      this.level++;
      this.xpToNextLevel = Math.floor(this.xpToNextLevel * 1.2);
      return true; // Leveled up!
    }
    return false;
  }
}
