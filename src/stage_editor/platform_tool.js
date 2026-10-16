export class PlatformPlacementTool {
  constructor(stageModel, gridSnap) {
    this.stageModel = stageModel;
    this.gridSnap = gridSnap;
    this.isDrawing = false;
    this.startX = 0;
    this.startY = 0;
  }

  startPlacement(x, y) {
    const snapped = this.gridSnap.snapPosition(x, y);
    this.isDrawing = true;
    this.startX = snapped.x;
    this.startY = snapped.y;
  }

  finishPlacement(currentX, currentY, isPassthrough = false) {
    if (!this.isDrawing) return;
    const snapped = this.gridSnap.snapPosition(currentX, currentY);
    
    const width = Math.max(40, Math.abs(snapped.x - this.startX));
    const height = Math.max(20, Math.abs(snapped.y - this.startY));
    const finalX = Math.min(this.startX, snapped.x);
    const finalY = Math.min(this.startY, snapped.y);

    this.stageModel.addPlatform({
      x: finalX,
      y: finalY,
      width,
      height,
      isPassthrough
    });

    this.isDrawing = false;
  }
}
