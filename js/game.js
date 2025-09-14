const GameElement = document.getElementById('game');

class Game {
  constructor() {
    this.player = new Player(500, 300);

    setInterval(() => {
      let testCountChips = document.querySelectorAll('#chips').length;
      if (testCountChips > 0) return;
      this.spawnchips(200, 500);
      console.log(testCountChips);
    }, 2000);
    this.displaygrid();
    this.update();
  }

  update() {
    this.player.MovePlayer();
    requestAnimationFrame(() => {
      this.update();
    });
  }

  displaygrid() {
    let grid = document.getElementById('grid');

    for (let y = 0; y < 12; y++) {
      for (let x = 0; x < 16; x++) {
        let gridElement = document.createElement('div');
        gridElement.id = 'gridElement';
        gridElement.className = `${x}${y}`;
        gridElement.style.left = `${x * 50}px`;
        gridElement.style.top = `${y * 50}px`;
        grid.appendChild(gridElement);
      }
    }
  }

  // UTILISER PLUTOT MODULO %
  validateXgrid(x) {
    x = Math.floor(x / 50) * 50;

    if (x > 15) {
      x = Math.floor(x / 15) * 50;
    }
  }

  validateYgrid() {}

  spawnchips(x, y) {
    let chips = document.createElement('div');
    chips.id = 'chips';
    chips.style.left = `${x}px`;
    chips.style.top = `${y}px`;
    GameElement.appendChild(chips);
  }

  key(key) {
    switch (key) {
      case 'd':
        this.player.dir = 0;
        break;
      case 'q':
        this.player.dir = 1;
        break;
      case 'z':
        this.player.dir = 2;
        break;
      case 's':
        this.player.dir = 3;
        break;
    }
    console.log(this.player);
  }
}
