const GameElement = document.getElementById('game');
const MapArray = [];
let dt = performance.now / 1000;
let timer = 0;

setInterval(() => {
  timer = timer + 1;
}, 100);

class Game {
  constructor() {
    this.grid = new Grid();
    this.player = new Player(500, 300);
    this.baseTime = performance.now();
    this.TimeEllapsed = (performance.now() - this.baseTime) / 1000;
    this.lastTik = performance.now();

    setInterval(function hi() {
      let CountChips = parseInt(document.querySelectorAll('#chips').length);
      if (CountChips > 0) return;
      let xRandom = Game.validateXcoord(Math.random() * 750);
      let yRandom = Game.validateYcoord(Math.random() * 550);

      new Chips(xRandom, yRandom);
    }, 1000);

    this.grid.displayGrid();
    this.update();
  }

  update() {
    this.TimeEllapsed = (performance.now() - this.baseTime) / 1000;

    dt = (performance.now() - this.lastTik) / 1000;
    this.lastTik = performance.now();

    MapArray.forEach((element) => {
      const arrayElement = document.getElementById(element.selector);
      element.x = parseInt(arrayElement.style.left.slice(0, -2));
      element.y = parseInt(arrayElement.style.top.slice(0, -2));

      element.Xcase = (Math.floor(element.x / 50) * 50) / 50;
      element.Ycase = (Math.floor(element.y / 50) * 50) / 50;

      if (element.name == 'player') document.getElementById('playerxCase').innerText = 'Xcase : ' + element.Xcase;
      if (element.name == 'player') document.getElementById('playeryCase').innerText = 'Ycase : ' + element.Ycase;

      if (element.name == 'chips') document.getElementById('chipsxCase').innerText = 'Xcase : ' + element.Xcase;
      if (element.name == 'chips') document.getElementById('chipsyCase').innerText = 'Ycase : ' + element.Ycase;
    });
    this.player.RefreshValues();

    this.player.MovePlayer(this.TimeEllapsed);

    Game.checkCollisions();
    requestAnimationFrame(() => {
      this.update();
    });
  }

  static ValueTimed(x) {
    return x;
  }

  static checkCollisions() {
    for (let x = 0; x < MapArray.length; x++) {
      MapArray.forEach((element) => {
        if (element.name == MapArray[x].name) return;
        if (element.Xcase == MapArray[x].Xcase && element.Ycase == MapArray[x].Ycase) {
          console.log('Colision between', element, 'and', MapArray[x]);

          if (element.name == 'player') {
            switch (MapArray[x].name) {
              case 'chips':
                document.getElementById(MapArray[x].selector).remove();
                MapArray.splice(x, 1);
                break;
              default:
                break;
            }
          }
        }
      });
    }
  }

  static validateXcoord(x) {
    return Math.floor((x / 50) % 15) * 50;
  }

  static validateYcoord(y) {
    return Math.floor((y / 50) % 11) * 50;
  }

  key(key) {
    switch (key) {
      case 'd':
      case 'ArrowRight':
        this.player.dir = 0;
        break;
      case 'q':
      case 'ArrowLeft':
        this.player.dir = 1;
        break;
      case 'z':
      case 'ArrowUp':
        this.player.dir = 2;
        break;
      case 's':
      case 'ArrowDown':
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
    chips.style.left = `${x}px`;
    chips.style.top = `${y}px`;
    MapArray.push({
      name: 'chips',
      selector: 'chips',
      x: x,
      y: y,
    });
    GameElement.appendChild(chips);
  }
}
