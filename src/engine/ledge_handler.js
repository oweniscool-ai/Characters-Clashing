export class LedgeHandler {
  constructor(stageLedges = []) {
    this.ledges = stageLedges; // Array of {x, y, side}
  }

  checkLedgeGrab(fighter) {
    if (fighter.isAirborne && fighter.velocityY > 0) {
      for (const ledge of this.ledges) {
        const dist = Math.hypot(fighter.x - ledge.x, fighter.y - ledge.y);
        if (dist < 25) {
          fighter.isHanging = true;
          fighter.x = ledge.x;
          fighter.y = ledge.y;
          fighter.velocityX = 0;
          fighter.velocityY = 0;
          return true;
        }
      }
    }
    return false;
  }
}
