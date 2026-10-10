export class HitstunCalculator {
  static calculateHitstun(damage, scaling) {
    return Math.floor(damage * 1.5 + scaling * 0.2);
  }

  static calculateHitlag(damage) {
    // Freezes both fighters briefly on impact for satisfying weight feel
    return Math.min(Math.floor(damage * 0.8 + 4), 20);
  }
}
