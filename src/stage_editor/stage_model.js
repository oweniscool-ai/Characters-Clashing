export class CustomStageModel {
  constructor(name = 'My Custom Arena') {
    this.name = name;
    this.platforms = [];
    this.hazards = [];
    this.spawnPoints = [{ x: 400, y: 300 }, { x: 880, y: 300 }];
    this.blastZones = { left: -300, right: 1580, top: -200, bottom: 900 };
  }

  addPlatform(platform) {
    this.platforms.push(platform);
  }

  removePlatform(index) {
    if (index >= 0 && index < this.platforms.length) {
      this.platforms.splice(index, 1);
    }
  }

  addHazard(hazard) {
    this.hazards.push(hazard);
  }

  removeHazard(index) {
    if (index >= 0 && index < this.hazards.length) {
      this.hazards.splice(index, 1);
    }
  }
}
