export function isKO(fighter) {
  return fighter.y > 900 || fighter.x < -300 || fighter.x > 1580;
}
