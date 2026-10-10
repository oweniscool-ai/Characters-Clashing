import { MatchStateMachine, MATCH_STATES } from './match_state_machine.js';
import { StockTracker } from './stock_tracker.js';
import { MatchTimer } from './match_timer.js';
import { DamageTracker } from './damage_tracker.js';
import { ScoreLedger } from './score_ledger.js';
import { VictoryEvaluator } from './victory_evaluator.js';

export class MatchOrchestrator {
  constructor(players, ruleset) {
    this.players = players;
    this.ruleset = ruleset;
    this.fsm = new MatchStateMachine(ruleset);
    this.stocks = new StockTracker(ruleset.get('stocks'));
    this.timer = new MatchTimer(ruleset.get('timeLimitSeconds'));
    this.damage = new DamageTracker(ruleset.get('staminaMode'), ruleset.get('startingStamina'));
    this.ledger = new ScoreLedger();

    this.players.forEach(p => {
      this.stocks.registerPlayer(p.id);
      this.damage.registerPlayer(p.id);
      this.ledger.registerPlayer(p.id);
    });
  }

  startMatch() {
    this.fsm.transitionTo(MATCH_STATES.COUNTDOWN);
  }

  update() {
    if (this.fsm.is(MATCH_STATES.IN_GAME)) {
      this.timer.update();
      const outcome = VictoryEvaluator.checkWinner(this.stocks, this.timer);

      if (outcome.hasWinner) {
        this.fsm.transitionTo(MATCH_STATES.GAME_OVER);
      } else if (outcome.reason === 'TIME_EXPIRED') {
        this.fsm.transitionTo(MATCH_STATES.SUDDEN_DEATH);
      }
    }
  }
}
