export class CPUProfileSelector {
  static getProfile(level = 5) {
    switch (level) {
      case 1: return { reactionDelayFrames: 25, comboAggression: 0.2, spacingAccuracy: 0.4 };
      case 5: return { reactionDelayFrames: 12, comboAggression: 0.6, spacingAccuracy: 0.7 };
      case 9: return { reactionDelayFrames: 2, comboAggression: 0.95, spacingAccuracy: 0.98 };
      default: return { reactionDelayFrames: 15, comboAggression: 0.5, spacingAccuracy: 0.6 };
    }
  }
}
