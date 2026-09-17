export class HitboxSystem {
  static checkCollision(boxA, boxB) {
    return (
      boxA.x < boxB.x + boxB.w &&
      boxA.x + boxA.w > boxB.x &&
      boxA.y < boxB.y + boxB.h &&
      boxA.y + boxA.h > boxB.y
    );
  }
}
