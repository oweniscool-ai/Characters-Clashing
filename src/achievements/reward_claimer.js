export class RewardClaimer {
  static claimXP(achievement, profileModel) {
    if (achievement.isUnlocked && !achievement.rewardClaimed) {
      achievement.rewardClaimed = true;
      profileModel.addXP(achievement.rewardXP);
      return true;
    }
    return false;
  }
}
