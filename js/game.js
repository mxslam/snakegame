const GameElement = document.getElementById('game');

class Game {
  constructor() {
    this.player = new Player(500, 300);

    // setInterval(() => {
    //   let testCountChips = document.querySelectorAll('#chips').length;
    //   if (testCountChips > 0) return;
    //   this.spawnchips(200, 500);
    //   console.log(testCountChips);
    // }, 2000);
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

    let r = Math.random() * 50;
    let g = Math.random() * 50;
    let b = Math.random() * 255;

    for (let i = 0, y = 0; i < 16; i++) {
      let gridElement = document.createElement('div');
      gridElement.id = 'gridElement';
      gridElement.className = `${i}${y}`;
      gridElement.style.left = `${i * 50}px`;
      gridElement.style.top = `${y * 50}px`;
      grid.appendChild(gridElement);

      if (i == 15 && y < 11) {
        y++;
        i = -1;
      }
    }
  }

  // spawnchips(x, y) {
  //   let chips = document.createElement('div');
  //   chips.id = 'chips';
  //   chips.style.left = `${x}px`;
  //   chips.style.top = `${y}px`;
  //   GameElement.appendChild(chips);
  // }

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
