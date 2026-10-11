export class BadgeManager {
  constructor() {
    this.earnedBadges = new Set();
    this.showcase = []; // Max 3 equipped badges
  }

  earnBadge(badgeId) {
    this.earnedBadges.add(badgeId);
  }

  equipBadge(badgeId, slotIndex) {
    if (this.earnedBadges.has(badgeId) && slotIndex >= 0 && slotIndex < 3) {
      this.showcase[slotIndex] = badgeId;
      return true;
    }
    return false;
  }
}
