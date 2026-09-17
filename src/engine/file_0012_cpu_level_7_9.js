import { CPUBrainBase } from './file_0009_cpu_brain_base.js';

export class HighLevelCPU extends CPUBrainBase {
  computeInputs(target) {
    const inputs = super.computeInputs(target);
    if (this.fighter.y > 350) inputs.jump = true;
    if (target && Math.abs(target.x - this.fighter.x) < 30) {
      inputs.attack = true;
    }
    return inputs;
  }
}
