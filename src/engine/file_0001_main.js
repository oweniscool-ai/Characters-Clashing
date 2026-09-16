import { OfflineEngine } from '../modes/file_0013_mode_offline.js';
import { OnlineEngine } from '../modes/file_0014_mode_online.js';
import { TrainingEngine } from '../modes/file_0015_mode_training.js';

export class GameApp {
  constructor() {
    this.currentEngine = null;
  }

  startMode(modeType, config = {}) {
    if (modeType === 'offline') {
      this.currentEngine = new OfflineEngine(config.p1, config.p2, config.cpuLevel);
    } else if (modeType === 'online') {
      this.currentEngine = new OnlineEngine(config.roomId);
    } else if (modeType === 'training') {
      this.currentEngine = new TrainingEngine(config.p1);
    }
    this.currentEngine.init();
  }
}

window.App = new GameApp();
