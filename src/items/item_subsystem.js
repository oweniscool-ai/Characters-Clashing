import { ItemSpawner } from './item_spawner.js';

export class ItemSubsystem {
  constructor(enabled = true) {
    this.enabled = enabled;
    this.spawner = new ItemSpawner();
    this.activeItems = [];
  }

  update(fightersList) {
    if (!this.enabled) return;

    this.spawner.update(this.activeItems, (x, y) => {
      this.activeItems.push({ x, y, type: 'generic' });
    });

    this.activeItems.forEach(item => {
      item.y += 2; // Basic gravity fall simulation
    });
  }

  render(ctx) {
    if (!this.enabled) return;
    this.activeItems.forEach(item => {
      ctx.fillStyle = '#00ffcc';
      ctx.fillRect(item.x, item.y, 25, 25);
    });
  }
}
