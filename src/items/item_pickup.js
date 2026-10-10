export class ItemPickupHandler {
  static checkProximityAndGrab(fighter, itemsList) {
    if (fighter.heldItem) return;

    for (let i = 0; i < itemsList.length; i++) {
      const item = itemsList[i];
      if (item.isHeld) continue;

      const dist = Math.hypot((fighter.x + fighter.width / 2) - (item.x + item.width / 2), (fighter.y + fighter.height / 2) - (item.y + item.height / 2));
      
      if (dist < 40) {
        fighter.heldItem = item;
        item.isHeld = true;
        item.holder = fighter;
        break;
      }
    }
  }
}
