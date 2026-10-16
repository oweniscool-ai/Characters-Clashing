export class HallOfFameRecords {
  constructor() {
    this.records = {
      highestDamageDealt: 0,
      fastestKOSeconds: 999,
      longestComboHits: 0
    };
  }

  updateRecord(key, value) {
    if (key === 'fastestKOSeconds') {
      if (value < this.records[key]) this.records[key] = value;
    } else {
      if (value > this.records[key]) this.records[key] = value;
    }
  }
}
