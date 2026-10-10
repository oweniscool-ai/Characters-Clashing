export class CommandParser {
  constructor() {
    this.history = [];
  }

  recordInput(input, frame) {
    this.history.push({ input, frame });
    if (this.history.length > 20) this.history.shift();
  }

  checkQuarterCircleForward() {
    // Checks for down -> down-forward -> forward motion sequence
    if (this.history.length < 3) return false;
    const last3 = this.history.slice(-3);
    return (
      last3[0].input === 'DOWN' &&
      last3[1].input === 'DOWN_FORWARD' &&
      last3[2].input === 'FORWARD'
    );
  }
}
