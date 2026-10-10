import { ItemBase } from './item_base.js';

export class GlitchyPopupItem extends ItemBase {
  constructor(x, y) {
    super('popup', 'Malware Pop-up Window', x, y);
    this.duration = 400; // 6.6 seconds of screen distraction
    this.width = 45;
    this.height = 35;
  }

  apply(fighter) {
    fighter.isDistracted = true;
    fighter.popupTimer = this.duration;
  }

  render(ctx) {
    if (this.isHeld) return;
    ctx.save();
    ctx.fillStyle = '#ff0055';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = '#ffffff';
    ctx.font = '10px monospace';
    ctx.fillText('[ERROR 404]', this.x + 2, this.y + 20);
    ctx.restore();
  }
}
