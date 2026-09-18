export const RULESET_PRESETS = {
  STANDARD_COMPETITIVE: {
    name: 'Competitive Standard',
    stocks: 3,
    timeLimitSeconds: 480, // 8 minutes
    allowItems: false,
    pauseEnabled: false,
    hazardsEnabled: false,
    staminaMode: false,
    startingStamina: 0
  },
  CASUAL_PARTY: {
    name: 'Casual Mayhem',
    stocks: 5,
    timeLimitSeconds: 300, // 5 minutes
    allowItems: true,
    pauseEnabled: true,
    hazardsEnabled: true,
    staminaMode: false,
    startingStamina: 0
  },
  STAMINA_BATTLE: {
    name: 'Stamina Showdown',
    stocks: 1,
    timeLimitSeconds: 180, // 3 minutes
    allowItems: false,
    pauseEnabled: true,
    hazardsEnabled: true,
    staminaMode: true,
    startingStamina: 150
  }
};

export class Ruleset {
  constructor(config = RULESET_PRESETS.STANDARD_COMPETITIVE) {
    this.config = { ...config };
  }

  get(key) {
    return this.config[key];
  }

  set(key, val) {
    this.config[key] = val;
  }
}
