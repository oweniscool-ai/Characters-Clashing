export class MenuNavigation {
  constructor(menuItems) {
    this.items = menuItems;
    this.selectedIndex = 0;
  }

  navigate(direction) {
    this.selectedIndex = (this.selectedIndex + direction + this.items.length) % this.items.length;
    return this.selectedIndex;
  }

  getSelected() {
    return this.items[this.selectedIndex];
  }
}
