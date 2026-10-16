export class GridSnap {
  constructor(gridSize = 20) {
    this.gridSize = gridSize;
  }

  snap(value) {
    return Math.round(value / this.gridSize) * this.gridSize;
  }

  snapPosition(x, y) {
    return {
      x: this.snap(x),
      y: this.snap(y)
    };
  }
}
