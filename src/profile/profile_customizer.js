export class ProfileCustomizer {
  constructor(profileModel) {
    this.profile = profileModel;
    this.equippedSkin = 'karen_def';
    this.equippedTaunt = 'taunt_laugh';
  }

  setSkin(skinId) {
    this.equippedSkin = skinId;
  }

  setTaunt(tauntId) {
    this.equippedTaunt = tauntId;
  }
}
