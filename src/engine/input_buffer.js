import { HUDOverlay } from './hud_overlay.js';
import { PauseMenuUI } from './pause_menu.js';
import { CountdownUI } from './countdown_ui.js';

export class UIManager {
  constructor(canvasWidth = 1280, canvasHeight = 720) {
    this.hud = new HUDOverlay(canvasWidth, canvasHeight);
    this.pauseMenu = new PauseMenuUI();
    this.countdown = new CountdownUI();
  }

  renderInGameHUD(ctx, players, stocksMap, percentagesMap) {
    this.hud.render(ctx, players, stocksMap, percentagesMap);
  }

  renderPause(ctx, width, height) {
    this.pauseMenu.render(ctx, width, height);
  }

  renderCountdown(ctx, text, width, height) {
    this.countdown.render(ctx, text, width, height);
  }
}

export const uiManager = new UIManager();
