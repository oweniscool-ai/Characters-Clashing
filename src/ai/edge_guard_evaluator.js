export class EdgeGuardEvaluator {
  static evaluatePosition(cpuX, cpuY, opponentX, opponentY, stageBounds) {
    const isOpponentOffstage = opponentX < stageBounds.left || opponentX > stageBounds.right;
    if (isOpponentOffstage && opponentY > stageBounds.bottom - 150) {
      return { intent: 'EDGEGUARD', targetX: opponentX };
    }
    return { intent: 'STAGE_CENTER', targetX: stageBounds.centerX };
  }
}
