import { InputBuffer } from './input_buffer.js';
import { ComboLinker } from './combo_linker.js';
import { FrameFreeze } from '../vfx/frame_freeze.js';

export class EngineCore {
  constructor() {
    this.inputBuffer = new InputBuffer();
    this.comboLinker = new ComboLinker();
    this.frameFreeze = new FrameFreeze();
    this.currentFrame = 0;
  }

  update() {
    this.currentFrame++;
    this.comboLinker.update();
  }
}

export const engineCore = new EngineCore();
