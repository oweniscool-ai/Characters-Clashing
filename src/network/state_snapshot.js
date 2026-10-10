export class StateSnapshotSerializer {
  static capture(frameIndex, fightersList) {
    const serializedFighters = fightersList.map(f => ({
      id: f.id,
      x: f.x,
      y: f.y,
      vx: f.velocityX,
      vy: f.velocityY,
      percent: f.percent,
      stocks: f.stocks
    }));
    return { frame: frameIndex, fighters: serializedFighters };
  }
}
