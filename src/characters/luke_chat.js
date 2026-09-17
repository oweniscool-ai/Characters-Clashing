import { FighterBase } from '../engine/fighter_base.js';

export class GroupChatLeakerLuke extends FighterBase {
  constructor() {
    super('luke_chat', 'Group Chat Leaker Luke');
    this.weight = 86;
  }

  specialAttack() {
    return { name: 'Exposed Receipt Wave', damage: 12, angle: 80, baseKB: 35, scaling: 60 };
  }
}
