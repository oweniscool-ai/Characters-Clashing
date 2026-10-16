import { StageSerializer } from './stage_serializer.js';

export class StageStorage {
  static saveCustomStage(slotKey, stageModel) {
    const json = StageSerializer.exportJSON(stageModel);
    localStorage.setItem(`cc_custom_stage_${slotKey}`, json);
  }

  static loadCustomStage(slotKey) {
    const json = localStorage.getItem(`cc_custom_stage_${slotKey}`);
    if (!json) return null;
    return StageSerializer.importJSON(json);
  }
}
