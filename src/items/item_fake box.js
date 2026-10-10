import { ItemBase } from './item_base.js';

export class FakeItemBox extends ItemBase {
  constructor(x, y) {
    super('fake_box', 'Suspicious Package', x, y);
  }

  triggerTrap(fighter) {
    fighter.takeDamage(15);
    fighter.applyKnockback(90, 30, 80);
  }
}
