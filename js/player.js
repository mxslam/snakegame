const PlayerElement = document.getElementById('player');

class Player {
  constructor(x, y) {
    this.SetPosition(x, y);
    this.dir = 0;
    this.xpos = parseInt(PlayerElement.style.left.slice(0, -2));
    this.ypos = parseInt(PlayerElement.style.top.slice(0, -2));
  }

  RefreshValues() {
    this.xpos = parseInt(PlayerElement.style.left.slice(0, -2));
    this.ypos = parseInt(PlayerElement.style.top.slice(0, -2));
  }

  SetXposition(x) {
    PlayerElement.style.left = `${x}px`;
  }

  SetYposition(y) {
    PlayerElement.style.top = `${y}px`;
  }
  SetPosition(x, y) {
    this.SetXposition(x);
    this.SetYposition(y);
  }

  MovePlayer() {
    switch (this.dir) {
      case 0:
        this.SetXposition(2 + this.xpos);
        break;

      case 1:
        this.SetXposition(this.xpos - 2);
        break;

      case 2:
        this.SetYposition(this.ypos - 2);

        break;
      case 3:
        this.SetYposition(2 + this.ypos);

        break;
    }
    this.RefreshValues();
  }

  IncreaseSnake() {
    PlayerElement.style.width = 20 + this.width + 'px';
  }
}
