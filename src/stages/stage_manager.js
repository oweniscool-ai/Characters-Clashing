import { SupermarketStage } from './stage_supermarket.js';
import { ParkingLotStage } from './stage_parking_lot.js';
import { BreakroomStage } from './stage_breakroom.js';
import { ServerRoomStage } from './stage_server_room.js';
import { HOALawnStage } from './stage_hoa_lawn.js';

export class StageManager {
  static loadStage(stageId) {
    switch (stageId) {
      case 'supermarket': return new SupermarketStage();
      case 'parking_lot': return new ParkingLotStage();
      case 'breakroom': return new BreakroomStage();
      case 'server_room': return new ServerRoomStage();
      case 'hoa_lawn': return new HOALawnStage();
      default: return new SupermarketStage();
    }
  }
}
