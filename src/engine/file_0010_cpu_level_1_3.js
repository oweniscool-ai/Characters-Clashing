import { CPUBrainBase } from './file_0009_cpu_brain_base.js';

export class LowLevelCPU extends CPUBrainBase {
  computeInputs(target) {
    if (Math.random() < 0.4) {
      return { left: false, right: false, jump: false, attack: false, special: false };
    }
    return super.computeInputs(target);
  }
}
