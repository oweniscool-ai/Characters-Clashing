export class InputManager {
  constructor() {
    this.keyState = {};
    window.addEventListener('keydown', (e) => { this.keyState[e.code] = true; });
    window.addEventListener('keyup', (e) => { this.keyState[e.code] = false; });
  }

  getInputs() {
    return {
      left: !!(this.keyState['KeyA'] || this.keyState['ArrowLeft']),
      right: !!(this.keyState['KeyD'] || this.keyState['ArrowRight']),
      jump: !!(this.keyState['KeyW'] || this.keyState['Space']),
      attack: !!(this.keyState['KeyJ'] || this.keyState['KeyZ']),
      special: !!(this.keyState['KeyK'] || this.keyState['KeyX'])
    };
  }
}
