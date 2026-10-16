export class SpawnPointTool {
  constructor(stageModel) {
    this.stageModel = stageModel;
  }

  addSpawnPoint(x, y) {
    if (this.stageModel.spawnPoints.length < 4) {
      this.stageModel.spawnPoints.push({ x, y });
      return true;
    }
    return false; // Max 4 spawn points
  }

  removeClosestSpawn(x, y) {
    if (this.stageModel.spawnPoints.length <= 2) return false; // Minimum 2 spawns
    let closestIndex = 0;
    let minDist = Infinity;

    this.stageModel.spawnPoints.forEach((pt, i) => {
      const dist = Math.hypot(pt.x - x, pt.y - y);
      if (dist < minDist) {
        minDist = dist;
        closestIndex = i;
      }
    });

    this.stageModel.spawnPoints.splice(closestIndex, 1);
    return true;
  }
}
