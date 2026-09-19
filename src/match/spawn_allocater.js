export class SpawnAllocator {
  constructor(spawnPoints = []) {
    this.spawnPoints = spawnPoints; // Array of {x, y}
  }

  setSpawnPoints(points) {
    this.spawnPoints = points;
  }

  getSpawnForPlayer(playerIndex) {
    if (this.spawnPoints.length === 0) {
      return { x: 640, y: 360 };
    }
    return this.spawnPoints[playerIndex % this.spawnPoints.length];
  }

  getRespawnPoint(playerId, activePlayers) {
    // Pick the spawn point furthest from active opponents
    if (this.spawnPoints.length === 0) return { x: 640, y: 200 };

    let bestPoint = this.spawnPoints[0];
    let maxMinDistance = -1;

    for (const point of this.spawnPoints) {
      let minDistanceToOpponent = Infinity;
      for (const opponent of activePlayers) {
        if (opponent.id === playerId || opponent.isDead) continue;
        const dist = Math.hypot(opponent.x - point.x, opponent.y - point.y);
        if (dist < minDistanceToOpponent) {
          minDistanceToOpponent = dist;
        }
      }
      if (minDistanceToOpponent > maxMinDistance) {
        maxMinDistance = minDistanceToOpponent;
        bestPoint = point;
      }
    }

    return bestPoint;
  }
}
