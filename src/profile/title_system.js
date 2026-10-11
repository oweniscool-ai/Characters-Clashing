export const AVAILABLE_TITLES = [
  { id: 'novice', name: 'Keyboard Warrior', requirement: 'Complete tutorial' },
  { id: 'karen_wrangler', name: 'Manager Spokeperson', requirement: 'Win 10 matches as Kathy' },
  { id: 'server_meltdown', name: 'Overclocked Panic', requirement: 'Win match with 300% damage' },
  { id: 'memelord', name: 'Certified Meme Lord', requirement: 'Unlock all 30 base characters' }
];

export class TitleSystem {
  constructor() {
    this.unlockedTitles = new Set(['novice']);
    this.currentTitle = 'Keyboard Warrior';
  }

  unlockTitle(titleId) {
    this.unlockedTitles.add(titleId);
  }

  setTitle(titleName) {
    if (this.unlockedTitles.has(titleName)) {
      this.currentTitle = titleName;
      return true;
    }
    return false;
  }
}
