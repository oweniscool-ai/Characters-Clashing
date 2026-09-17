export class BlastzoneDetector {
  static checkKO(fighter, bounds = { top: -200, bottom: 900, left: -300, right: 1580 }) {
    if (
      fighter.x < bounds.left ||
      fighter.x > bounds.right ||
      fighter.y < bounds.top ||
      fighter.y > bounds.bottom
    ) {
      fighter.stocks -= 1;
      return true;
    }
    return false;
  }
}
