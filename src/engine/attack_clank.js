export class AttackClank {
  static checkClank(attackA, attackB) {
    // If two active attacks collide with equivalent damage levels, both cancel out
    const threshold = 3;
    if (Math.abs(attackA.damage - attackB.damage) <= threshold) {
      return 'CLANK'; // Both attacks neutralized
    }
    return attackA.damage > attackB.damage ? 'WIN_A' : 'WIN_B';
  }
}
