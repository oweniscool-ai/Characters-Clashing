import { CPUBrainBase } from './file_0009_cpu_brain_base.js';

export class MidLevelCPU extends CPUBrainBase {
  computeInputs(target) {
    const inputs = super.computeInputs(target);
    if (!this.fighter.isGrounded && this.fighter.y > 400) {
      inputs.jump = true;
    }
    return inputs;
  }
}
