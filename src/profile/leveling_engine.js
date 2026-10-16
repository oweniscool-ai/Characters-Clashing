export class LevelingEngine {
  static calculateMatchXP(won, durationSeconds, kills) {
    let xp = 100; // Base match participation XP
    if (won) xp += 150;
    xp += kills * 25;
    xp += Math.floor(durationSeconds * 0.5);
    return xp;
  }
}
