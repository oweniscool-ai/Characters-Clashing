import { screenShake } from './screen_shake.js';
import { screenFlash } from './screen_flash.js';
import { frameFreeze } from './frame_freeze.js';

export class VFXManager {
  constructor() {
    this.emitters = [];
    this.effects = [];
  }

  addEmitter(emitter) {
    this.emitters.push(emitter);
  }

  addEffect(effect) {
    this.effects.push(effect);
  }

  update(delta = 1) {
    const isFrozen = frameFreeze.update();
    if (isFrozen) return;

    screenShake.update();
    screenFlash.update();

    for (let i = this.emitters.length - 1; i >= 0; i--) {
      this.emitters[i].update(delta);
    }

    for (let i = this.effects.length - 1; i >= 0; i--) {
      this.effects[i].update(delta);
      if (this.effects[i].isDead && this.effects[i].isDead()) {
        this.effects.splice(i, 1);
      }
    }
  }

  render(ctx) {
    ctx.save();
    screenShake.apply(ctx);

    this.emitters.forEach(e => e.render(ctx));
    this.effects.forEach(fx => fx.render(ctx));

    ctx.restore();
    screenFlash.render(ctx);
  }
}

export const vfxManager = new VFXManager();
