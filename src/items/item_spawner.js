export class ItemSpawner {
  constructor(spawnIntervalFrames = 600) {
    this.spawnIntervalFrames = spawnIntervalFrames;
    this.timer = 0;
    this.spawnPoints = [{ x: 400, y: 150 }, { x: 640, y: 100 }, { x: 880, y: 150 }];
  }

  update(activeItemsList, spawnCallback) {
    this.timer++;
    if (this.timer >= this.spawnIntervalFrames) {
      this.timer = 0;
      const point = this.spawnPoints[Math.floor(Math.random() * this.spawnPoints.length)];
      spawnCallback(point.x, point.y);
    }
  }
}
