class Grid {
  constructor() {
    this.grid = document.getElementById('grid');
  }

  displayGrid() {
    for (let y = 0; y < 12; y++) {
      for (let x = 0; x < 16; x++) {
        let gridElement = document.createElement('div');
        gridElement.id = 'gridElement';
        gridElement.className = `${x}${y}`;
        gridElement.style.left = `${x * 50}px`;
        gridElement.style.top = `${y * 50}px`;
        this.grid.appendChild(gridElement);
      }
    }
  }
}
