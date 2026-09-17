export class CPUBrainBase {
  constructor(fighter, level = 3) {
    this.fighter = fighter;
    this.level = level;
  }

  computeInputs(target) {
    const inputs = { left: false, right: false, jump: false, attack: false, special: false };
    if (!target) return inputs;

    if (target.x > this.fighter.x + 15) inputs.right = true;
    if (target.x < this.fighter.x - 15) inputs.left = true;

    return inputs;
  }
}
