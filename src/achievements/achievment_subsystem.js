import { achievementTracker } from './achievement_tracker.js';
import { AchievementStorage } from './achievement_storage.js';
import { PlayerProfile } from '../profile/profile_model.js';

export class AchievementSubsystem {
  static init() {
    AchievementStorage.load(achievementTracker);
    console.log('Achievement and Profile Subsystem Initialized.');
  }

  static saveProgress() {
    AchievementStorage.save(achievementTracker);
  }
}
