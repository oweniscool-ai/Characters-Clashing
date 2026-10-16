export class EraserTool {
  constructor(stageModel) {
    this.stageModel = stageModel;
  }

  eraseAt(x, y) {
    // Check platforms
    for (let i = this.stageModel.platforms.length - 1; i >= 0; i--) {
      const p = this.stageModel.platforms[i];
      if (x >= p.x && x <= p.x + p.width && y >= p.y && y <= p.y + p.height) {
        this.stageModel.platforms.splice(i, 1);
        return true;
      }
    }

    // Check hazards
    for (let i = this.stageModel.hazards.length - 1; i >= 0; i--) {
      const h = this.stageModel.hazards[i];
      if (x >= h.x && x <= h.x + h.width && y >= h.y && y <= h.y + h.height) {
        this.stageModel.hazards.splice(i, 1);
        return true;
      }
    }

    return false;
  }
}
