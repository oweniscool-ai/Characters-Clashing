export class TractionPhysics {
  static applyGroundMovement(fighter, inputDirection, maxSpeed = 6, acceleration = 0.8, friction = 0.85) {
    if (inputDirection !== 0) {
      fighter.velocityX += inputDirection * acceleration;
      if (Math.abs(fighter.velocityX) > maxSpeed) {
        fighter.velocityX = Math.sign(fighter.velocityX) * maxSpeed;
      }
    } else {
      fighter.velocityX *= friction;
      if (Math.abs(fighter.velocityX) < 0.1) {
        fighter.velocityX = 0;
      }
    }
  }
}
