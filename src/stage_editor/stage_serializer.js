export class StageSerializer {
  static exportJSON(stageModel) {
    return JSON.stringify({
      name: stageModel.name,
      platforms: stageModel.platforms,
      hazards: stageModel.hazards,
      spawnPoints: stageModel.spawnPoints,
      blastZones: stageModel.blastZones
    }, null, 2);
  }

  static importJSON(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      return parsed;
    } catch (e) {
      console.warn('Failed to parse custom stage JSON', e);
      return null;
    }
  }
}
