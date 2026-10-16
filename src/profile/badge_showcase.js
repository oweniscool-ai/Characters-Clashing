export class BadgeShowcaseUIProvider {
  static formatShowcase(badgeManager) {
    return badgeManager.showcase.map(badgeId => ({
      id: badgeId,
      displayReady: badgeId ? `[BADGE: ${badgeId.toUpperCase()}]` : '[EMPTY SLOT]'
    }));
  }
}
