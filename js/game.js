const GameElement = document.getElementById('game');
const MapArray = [];

class Game {
  constructor() {
    this.grid = new Grid();
    this.player = new Player(500, 300);

    setInterval(function hi() {
      let CountChips = parseInt(document.querySelectorAll('#chips').length);
      if (CountChips > 0) return;
      new Chips(Math.random() * 1000, Math.random() * 1000);
      console.log(MapArray);
    }, 1000);

    this.grid.displayGrid();
    this.update();
  }

  update() {
    this.player.RefreshValues();
    this.player.MovePlayer();
    requestAnimationFrame(() => {
      this.update();
    });
  }

  // UTILISER PLUTOT MODULO %
  static validateXcoord(x) {
    return (Math.floor(x / 50) % 16) * 50;
  }

  static validateYcoord(y) {
    return (Math.floor(y / 50) % 12) * 50;
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

class Chips {
  constructor(x, y) {
    let chips = document.createElement('div');
    chips.id = 'chips';
    chips.style.left = `${Game.validateXcoord(x)}px`;
    chips.style.top = `${Game.validateYcoord(y)}px`;
    MapArray.push({
      name: 'chips',
      x: Game.validateXcoord(x),
      y: Game.validateYcoord(y),
    });
    GameElement.appendChild(chips);
  }
}
