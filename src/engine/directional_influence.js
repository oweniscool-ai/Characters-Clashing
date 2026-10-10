export class DirectionalInfluence {
  static applyDI(baseKnockbackAngle, stickVectorX, stickVectorY) {
    // Alters knockout trajectory angle based on player analog stick input during launch
    const angleAdjustment = stickVectorX * 15; // Max 15 degree shift
    return baseKnockbackAngle + angleAdjustment;
  }
}
