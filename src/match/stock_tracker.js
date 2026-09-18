export class StockTracker {
  constructor(initialStocks = 3) {
    this.initialStocks = initialStocks;
    this.stocks = new Map();
  }

  registerPlayer(playerId) {
    this.stocks.set(playerId, this.initialStocks);
  }

  loseStock(playerId, count = 1) {
    if (!this.stocks.has(playerId)) return 0;
    const current = this.stocks.get(playerId);
    const updated = Math.max(0, current - count);
    this.stocks.set(playerId, updated);
    return updated;
  }

  getStocks(playerId) {
    return this.stocks.get(playerId) ?? 0;
  }

  isEliminated(playerId) {
    return this.getStocks(playerId) <= 0;
  }

  getRemainingPlayerIds() {
    return Array.from(this.stocks.entries())
      .filter(([_, count]) => count > 0)
      .map(([id]) => id);
  }
}
