export class StageBase {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.platforms = [];
    this.hazards = [];
    this.blastZones = { left: -300, right: 1580, top: -200, bottom: 900 };
  }

  update(delta) {
    this.platforms.forEach(plat => plat.update?.(delta));
    this.hazards.forEach(hazard => hazard.update?.(delta));
  }

  render(ctx) {
    this.platforms.forEach(plat => plat.render(ctx));
    this.hazards.forEach(hazard => hazard.render(ctx));
  }
}
