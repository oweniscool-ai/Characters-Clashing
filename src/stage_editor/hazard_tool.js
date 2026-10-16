export class HazardPlacementTool {
  constructor(stageModel, gridSnap) {
    this.stageModel = stageModel;
    this.gridSnap = gridSnap;
  }

  placeHazard(x, y, hazardType = 'SPIKES') {
    const snapped = this.gridSnap.snapPosition(x, y);
    this.stageModel.addHazard({
      type: hazardType,
      x: snapped.x,
      y: snapped.y,
      width: 50,
      height: 30
    });
  }
}
