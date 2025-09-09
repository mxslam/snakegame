const GameElement = document.getElementById('game');

class Game {
  constructor() {
    this.player = new Player(500, 300);
    console.log(this.player);
    this.update();
    this.player.IncreaseSnake();
  }

  update() {
    this.player.MovePlayer();
    this.colision();
    requestAnimationFrame(() => {
      this.update();
    });
  }

  colision() {
    if (this.player.xpos > 750) {
      this.player.SetXposition(0);
    }
    if (this.player.xpos < 0) {
      this.player.SetXposition(750);
    }

    if (this.player.ypos > 550) {
      this.player.SetYposition(0);
    }
    if (this.player.ypos < 0) {
      this.player.SetYposition(550);
    }
    this.player.RefreshValues();
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
