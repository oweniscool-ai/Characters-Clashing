export const STAGE_THEMES = {
  SUPERMARKET: { id: 'supermarket', backgroundColor: '#222233', gridColor: '#333344' },
  SERVER_ROOM: { id: 'server_room', backgroundColor: '#111811', gridColor: '#223322' },
  BREAKROOM: { id: 'breakroom', backgroundColor: '#2b1e1a', gridColor: '#3d2b25' },
  PARKING_LOT: { id: 'parking_lot', backgroundColor: '#181822', gridColor: '#2a2a38' }
};

export class ThemeSelector {
  constructor() {
    this.currentTheme = STAGE_THEMES.SUPERMARKET;
  }

  setTheme(themeKey) {
    if (STAGE_THEMES[themeKey]) {
      this.currentTheme = STAGE_THEMES[themeKey];
    }
  }
}
