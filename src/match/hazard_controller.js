export class HazardController {
  constructor(hazardsEnabled = true) {
    this.hazardsEnabled = hazardsEnabled;
    this.activeHazards = [];
  }

  registerHazard(hazard) {
    this.activeHazards.push(hazard);
  }

  update(delta = 1) {
    if (!this.hazardsEnabled) return;
    this.activeHazards.forEach(h => h.update && h.update(delta));
  }

  render(ctx) {
    if (!this.hazardsEnabled) return;
    this.activeHazards.forEach(h => h.render && h.render(ctx));
  }
}
