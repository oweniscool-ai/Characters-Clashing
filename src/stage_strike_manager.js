export class StageStrikeManager {
  constructor(availableStages = [], strikePattern = [1, 2, 1]) {
    this.pool = [...availableStages];
    this.strikePattern = strikePattern;
    this.currentTurnIndex = 0;
    this.bannedStages = new Set();
  }

  strikeStage(stageId) {
    if (this.bannedStages.has(stageId) || !this.pool.includes(stageId)) {
      return false;
    }
    this.bannedStages.add(stageId);
    this.currentTurnIndex++;
    return true;
  }

  getRemainingStages() {
    return this.pool.filter(s => !this.bannedStages.has(s));
  }

  isSelectionComplete() {
    return this.getRemainingStages().length === 1;
  }

  getSelectedStage() {
    const remaining = this.getRemainingStages();
    return remaining.length === 1 ? remaining[0] : null;
  }
}
