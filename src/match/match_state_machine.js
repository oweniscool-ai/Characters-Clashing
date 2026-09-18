export const MATCH_STATES = {
  PRE_MATCH: 'PRE_MATCH',
  COUNTDOWN: 'COUNTDOWN',
  IN_GAME: 'IN_GAME',
  PAUSED: 'PAUSED',
  SUDDEN_DEATH: 'SUDDEN_DEATH',
  GAME_OVER: 'GAME_OVER',
  RESULTS: 'RESULTS'
};

export class MatchStateMachine {
  constructor(ruleset) {
    this.ruleset = ruleset;
    this.currentState = MATCH_STATES.PRE_MATCH;
    this.listeners = new Set();
  }

  transitionTo(newState) {
    if (this.currentState === newState) return;
    const oldState = this.currentState;
    this.currentState = newState;
    this.listeners.forEach(cb => cb(newState, oldState));
  }

  onStateChange(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  is(state) {
    return this.currentState === state;
  }
}
