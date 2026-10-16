export class EditorHistoryStack {
  constructor(maxSize = 20) {
    this.maxSize = maxSize;
    this.undoStack = [];
    this.redoStack = [];
  }

  pushState(stateSnapshot) {
    this.undoStack.push(JSON.stringify(stateSnapshot));
    if (this.undoStack.length > this.maxSize) {
      this.undoStack.shift();
    }
    this.redoStack = []; // Clear redo stack on new action
  }

  undo(currentState) {
    if (this.undoStack.length === 0) return null;
    this.redoStack.push(JSON.stringify(currentState));
    const previous = this.undoStack.pop();
    return JSON.parse(previous);
  }

  redo(currentState) {
    if (this.redoStack.length === 0) return null;
    this.undoStack.push(JSON.stringify(currentState));
    const next = this.redoStack.pop();
    return JSON.parse(next);
  }
}
