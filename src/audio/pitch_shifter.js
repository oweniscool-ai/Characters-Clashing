export function calculateDamagePitchModifier(currentPercent) {
  // Higher percents result in higher-pitched, more dramatic hit SFX
  const pitchIncrease = Math.min(currentPercent / 200, 0.5);
  return 1.0 + pitchIncrease;
}
